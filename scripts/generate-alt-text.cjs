// scripts/generate-alt-text.cjs
const fs      = require('fs');
const path    = require('path');
const tags    = require('../data/tags.json');         // { "tweed-and-raincoat.jpeg": ["tweed","raincoat","outdoor",...] }
const vocab   = require('../data/alt-taxonomy.json'); // see above

const altMapping = {};

Object.entries(tags).forEach(([file, imageTagsRaw]) => {
  // Ensure we have an array of strings
  const imageTags = Array.isArray(imageTagsRaw)
    ? imageTagsRaw
    : Array.isArray(imageTagsRaw.tags)
      ? imageTagsRaw.tags
      : [];

  // pick one keyword from each category if present
  const mats = vocab.materials.filter(m => imageTags.includes(m));
  const gars = vocab.garments .filter(g => imageTags.includes(g));
  const sets = vocab.settings .filter(s => imageTags.includes(s.toLowerCase()));
  
  // fallback to filename if no match
  const material = mats[0] || "stylish";
  const garment  = gars[0] || path.basename(file, path.extname(file));
  const setting  = sets[0] || "urban scene";
  
  // assemble your alt
  altMapping[`/lookbook/${file}`] = 
    `${material.charAt(0).toUpperCase() + material.slice(1)} ${garment} on ${setting}`;
});

fs.writeFileSync(
  path.join(__dirname, '../data/alt-mapping.json'),
  JSON.stringify(altMapping, null, 2)
);
console.log("✅ alt-mapping.json written");