// scripts/fix-lookbook-paths.js
const fs   = require('fs');
const path = require('path');

const filesToFix = [
  // Your “official” Lookbook component
  path.join(__dirname, '../src/components/lookbook.tsx'),
];

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Skipping missing file: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  // Replace old lookbook paths with new /images/lookbook paths
  const updated = content.replace(/\/lookbook\/(shot\d+\.jpg)/g, '/images/lookbook/$1');

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated paths in ${filePath}`);
  } else {
    console.log(`ℹ️  No '/lookbook/*' paths found in ${filePath}`);
  }
});