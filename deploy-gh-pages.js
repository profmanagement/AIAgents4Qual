// deploy-gh-pages.js - Helper script for GitHub Pages deployment
const fs = require('fs');
const path = require('path');

console.log('🚀 GitHub Pages Deployment Helper');
console.log('================================');

// Check if out directory exists
if (!fs.existsSync('./out')) {
  console.log('❌ Build directory not found. Please run "npm run build:gh-pages" first.');
  process.exit(1);
}

// Check build structure
console.log('\n📁 Checking build structure...');
const requiredFiles = [
  'index.html',
  'call-for-papers/index.html',
  'faq/index.html',
  '_next/static/css',
  '_redirects',
  '404.html'
];

let allGood = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(`./out/${file}`)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allGood = false;
  }
});

if (!allGood) {
  console.log('\n❌ Some required files are missing. Please check the build.');
  process.exit(1);
}

console.log('\n✅ Build structure looks good!');

// Check GitHub Pages configuration
console.log('\n🔧 GitHub Pages Configuration:');
console.log('1. Go to your repository: https://github.com/profmanagement/QualAISummit');
console.log('2. Click "Settings" tab');
console.log('3. Scroll down to "Pages" section');
console.log('4. Under "Source", select "Deploy from a branch"');
console.log('5. Choose "gh-pages" branch and "/ (root)" folder');
console.log('6. Click "Save"');

console.log('\n📋 Next steps:');
console.log('1. Wait for GitHub Actions to complete (check Actions tab)');
console.log('2. Verify gh-pages branch is created');
console.log('3. Check Pages settings are configured correctly');
console.log('4. Test the live site');

console.log('\n🔍 Troubleshooting:');
console.log('- If pages still show 404, check the Actions tab for errors');
console.log('- Ensure the gh-pages branch exists and contains the built files');
console.log('- Verify GitHub Pages is enabled and configured for gh-pages branch');
console.log('- Check that the repository is public (or you have GitHub Pro for private repos)');

console.log('\n✨ Deployment helper completed!');
