#!/bin/bash
# Comprehensive fix for Vercel deployment issues
# This script resolves path discrepancies and React version conflicts

echo "🔍 Starting comprehensive Vercel deployment fix..."

# 1. Ensure the src/content/editorial directory exists and is tracked by git
if [ ! -d "src/content/editorial" ]; then
  echo "📁 Creating src/content/editorial directory..."
  mkdir -p src/content/editorial
  # Create a .gitkeep file to ensure the directory is tracked by git
  touch src/content/editorial/.gitkeep
  echo "✅ Created and tracked src/content/editorial directory"
else
  echo "✓ src/content/editorial directory already exists"
  # Still ensure .gitkeep is present
  touch src/content/editorial/.gitkeep
fi

# 2. Copy all editorial MD files to src/content/editorial
echo "📄 Copying markdown files to src/content/editorial..."
if [ -d "content/editorial" ]; then
  cp content/editorial/*.md src/content/editorial/ 2>/dev/null
  echo "✅ Content copied to src/content/editorial"
  # List the files to verify
  echo "Files in src/content/editorial:"
  ls -la src/content/editorial/
else
  echo "❌ Error: content/editorial directory not found"
  exit 1
fi

# 3. Fix React version in package.json definitively (not with regex)
echo "🛠️ Fixing React version in package.json..."
if [ -f "package.json" ]; then
  # Create a backup first
  cp package.json package.json.bak
  
  # Use node to precisely update the package.json
  node -e '
    const fs = require("fs");
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    // Fix React version - if the key exists, set it to 18.2.0 exactly
    if (pkg.dependencies.react) {
      if (pkg.dependencies.react !== "18.2.0") {
        console.log(`Changing react from ${pkg.dependencies.react} to 18.2.0`);
        pkg.dependencies.react = "18.2.0";
      }
    }
    
    // Fix React DOM version
    if (pkg.dependencies["react-dom"]) {
      if (pkg.dependencies["react-dom"] !== "18.2.0") {
        console.log(`Changing react-dom from ${pkg.dependencies["react-dom"]} to 18.2.0`);
        pkg.dependencies["react-dom"] = "18.2.0";
      }
    }
    
    // Write the updated package.json
    fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
  '
  
  echo "✅ Fixed React versions in package.json"
else
  echo "❌ Error: package.json not found"
  exit 1
fi

# 4. Verify Next.js config is correct
echo "⚙️ Checking Next.js configuration..."
if [ -f "next.config.mjs" ]; then
  # Ensure the experimental config is correct
  if ! grep -q "serverComponentsExternalPackages" next.config.mjs; then
    echo "📝 Updating Next.js configuration..."
    cp next.config.mjs next.config.mjs.bak
    
    # Use node for precise replacement
    node -e '
      const fs = require("fs");
      let config = fs.readFileSync("next.config.mjs", "utf8");
      
      // Replace older serverExternalPackages config with experimental config
      config = config.replace(
        /serverExternalPackages\s*:\s*\[[^\]]*\]/,
        "experimental: {\n    serverComponentsExternalPackages: [\"gray-matter\"]\n  }"
      );
      
      fs.writeFileSync("next.config.mjs", config);
    '
    
    echo "✅ Updated Next.js configuration"
  else
    echo "✓ Next.js configuration looks good"
  fi
else
  echo "❌ Error: next.config.mjs not found"
  exit 1
fi

# 5. Create a vercel.json file to ensure correct build settings
echo "🔧 Creating optimized Vercel configuration..."
cat > vercel.json << 'EOL'
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/editorial/(.*)",
      "destination": "/editorial/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
EOL
echo "✅ Created Vercel configuration"

# 6. Test build locally
echo "🏗️ Testing build locally..."
npm run build

# 7. Final steps
if [ $? -eq 0 ]; then
  echo ""
  echo "🎉 All fixes applied successfully!"
  echo "✅ Local build successful"
  echo ""
  echo "Next steps:"
  echo "1. Add all changes: git add ."
  echo "2. Commit changes: git commit -m \"Fix Vercel deployment with corrected paths and React versions\""
  echo "3. Push to GitHub: git push"
  echo "4. In Vercel dashboard, select ONLY ONE deployment to retain and delete all others"
  echo "   - Choose the one marked 9g9yjyvmy (your current production deployment)"
  echo "   - Go to project settings and select 'General' → 'Deployment Domains' to manage"
  echo ""
else
  echo ""
  echo "❌ Local build failed"
  echo "Review the errors above and address them before continuing"
fi