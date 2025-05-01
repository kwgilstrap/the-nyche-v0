// list-models.mjs
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

(async () => {
  const res = await openai.models.list();
  console.log("OK, here are the ones you can use:\n", 
    res.data
      .map(m=>m.id)
      .filter(id=>/vision|gpt-4/i.test(id))
      .join("\n")
  );
})();