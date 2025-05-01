// process-and-tag.js
import fs from "fs";
import path from "path";
import sharp from "sharp";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("🚨 Missing OPENAI_API_KEY!");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const RAW_DIR   = "canva-templates/raw";
const OUT_DIR   = "canva-templates/processed";
const VERTICAL_DIR = path.join(OUT_DIR, "vertical");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
const results = [];
if (!fs.existsSync(VERTICAL_DIR)) fs.mkdirSync(VERTICAL_DIR, { recursive: true });

async function run(file) {
  console.log(`\n🔄 Processing ${file}`);
 
 const src = path.join(RAW_DIR, file);
  const dst = path.join(OUT_DIR, file);


  // 1) crop & center-cover to 1200×1200
  await sharp(src)
    .resize(1200, 1200, { fit: "cover" })
    .toFile(dst);
  console.log(`✅ Saved cropped: ${dst}`);

  // 1b) crop & center-cover to 1080×1920 vertical format
  const vDst = path.join(VERTICAL_DIR, file);
  await sharp(src)
    .resize(1080, 1920, { fit: "cover" })
    .toFile(vDst);
  console.log(`✅ Saved vertical: ${vDst}`);

  // 2) send to OpenAI Vision
  const buffer = fs.readFileSync(dst);
  const response = await openai.responses.create({
    model: "gpt-4o",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: "List 5 tags and a one-sentence description for this image." },
          { type: "input_image", image_url: `data:image/jpeg;base64,${buffer.toString("base64")}` }
        ],
      },
    ],
  });
  console.log(`🏷️ Tags for ${file} →`, response.output_text);
  results.push({
    file,
    tags: response.output_text.trim()
  });
}
(async () => {
  const args = process.argv.slice(2);
  let files = fs.readdirSync(RAW_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
  if (args.length) {
    files = files.filter(f => args.includes(f));
    console.log(`Processing selected files: ${files.join(", ")}`);
  }
  if (!files.length) {
    console.error(`🚨 No images found in ${RAW_DIR}`);
    process.exit(1);
  }
  for (const f of files) {
    try {
      await run(f);
    } catch (e) {
      console.error(`❌ Error on ${f}:`, e.message);
    }
  }
  // Write out collected tags
  const outputPath = path.join(OUT_DIR, 'tags.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`✅ Wrote tags.json with ${results.length} entries to ${outputPath}`);
})();
