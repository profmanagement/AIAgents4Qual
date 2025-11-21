// fix-paths.js - Script to fix absolute paths in Next.js static export for GitHub Pages
const fs = require('fs');
const path = require('path');

const outDir = './out';

function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // For GitHub Pages with custom domain, absolute paths work best
    // Keep the absolute paths as they are - don't change them to relative
    console.log(`Processed (no changes needed): ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixPathsInFile(filePath);
    }
  });
}

console.log('Starting GitHub Pages deployment preparation...');
console.log('For custom domain deployment, keeping absolute paths as-is');
processDirectory(outDir);

// Create .nojekyll file for GitHub Pages
const nojekyllPath = path.join(outDir, '.nojekyll');
try {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file for GitHub Pages');
} catch (error) {
  console.error('Error creating .nojekyll file:', error.message);
}

console.log('GitHub Pages preparation completed!');
