// scripts/generate-captions.cjs
const fs = require('fs');
const path = require('path');

const tags     = require('../data/tags.json');
const vocab    = require('../data/alt-taxonomy.json');   // use social_trending here
const alts     = require('../data/alt-mapping.json');    // if you want to echo the alt in the caption

// Engagement prompts - mature, confident, inviting, insightful
const prompts = [
  "What subtle detail elevates this composition for you?",
  "Proportion is everything—notice how the silhouette anchors the entire look.",
  "Consider this your morning brief on intentional style. Thoughts?",
  "This is what happens when material and context align perfectly.",
  "Texture, proportion, setting—the trifecta of considered style.",
  "A case study in quiet confidence.",
  "This wasn't styled—it was composed. The difference is in the details.",
  "Fewer pieces, better materials, deliberate choices.",
  "The subtle tension between structure and ease makes this work.",
  "Context informs fabric choice, not the other way around.",
  "Evolution, not revolution—this is how wardrobes mature.",
  "When utility meets intention—the hallmark of enduring style.",
  "The fabric will tell you everything you need to know.",
  "Sometimes the most powerful statements are the quietest ones.",
  "Less noise, more signal. The essence of NYC dressing."
];

// Enhanced hashtag collection
const hashtags = [
  "#OOTD", "#Menswear", "#NYCStyle", "#StreetStyle",
  "#TheNyche", "#NoSweats", "#ChinatownStyle", "#QuietLuxury", 
  "#SlowFashion", "#DressWellLiveSlow", "#NYC", "#ManhattanMoment",
  "#IntentionalStyle", "#MaterialIntegrity", "#StyleTheory",
  "#CuratedWardrobe", "#ProportionPlay", "#UrbanUniform",
  "#SartorialNarrative", "#TexturalDialogue", "#StyleNotFashion",
  "#VisualBalance", "#CraftedLiving", "#ConsideredDetails",
  "#ClothingPhilosophy", "#PatinaPotential", "#GarmentDistrict",
  "#SeasonalTransition", "#CapsuleThinking", "#StylePrinciples",
  "#UrbanArchive", "#NotTrending", "#BuyBetterBuyLess",
  "#CityCanvas", "#SartorialDisposition", "#MenOfSubstance"
];

const capMapping = {};

Object.entries(tags).forEach(([file, rawTags]) => {
  // pick 3-4 purposeful social terms
  const socialTerms = vocab.social_trending || [];
  
  // Filter for relevance with more nuanced approach
  const relevantTerms = socialTerms.filter(term => {
    const normalizedTerm = term.replace('#', '').toLowerCase();
    const tagText = rawTags.toLowerCase();
    return tagText.includes(normalizedTerm.split(' ')[0]) || 
           tagText.includes(normalizedTerm.split(' ')[1]);
  });
  
  // Balance between relevant and trending terms
  let picks = [];
  if (relevantTerms.length >= 2) {
    picks = relevantTerms.sort(() => 0.5 - Math.random()).slice(0, 2);
  } else if (relevantTerms.length === 1) {
    picks = [...relevantTerms];
  }
  
  // Carefully select complementary hashtags
  const availableHashtags = hashtags.filter(tag => !picks.includes(tag));
  while (picks.length < 4) {
    const randomIndex = Math.floor(Math.random() * availableHashtags.length);
    const tag = availableHashtags[randomIndex];
    if (!picks.includes(tag)) {
      picks.push(tag);
      availableHashtags.splice(randomIndex, 1);
    }
  }

  // Select a prompt that complements the image context
  const promptIndex = Math.floor(Math.random() * prompts.length);
  const prompt = prompts[promptIndex];

  // Create a more sophisticated caption
  const publicPath = `/lookbook/${path.basename(file)}`;
  
  // Format caption with deliberate structure
  const altText = alts[publicPath] ? `${alts[publicPath].trim()} ` : "";
  capMapping[publicPath] = `${altText}${picks.join(' ')} · ${prompt}`;
});

fs.writeFileSync(
  path.join(__dirname, '../data/captions.json'),
  JSON.stringify(capMapping, null, 2)
);

console.log("✅ captions.json written with elevated engagement content");