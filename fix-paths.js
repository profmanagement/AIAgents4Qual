// fix-paths.js - Script to fix absolute paths in Next.js static export for GitHub Pages
const fs = require('fs');
const path = require('path');

const outDir = './out';

function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS paths
    content = content.replace(/href="\/_next\//g, 'href="./_next/');
    content = content.replace(/src="\/_next\//g, 'src="./_next/');
    
    // Fix other asset paths
    content = content.replace(/url\(\/_next\//g, 'url(./_next/');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed paths in: ${filePath}`);
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

console.log('Starting to fix absolute paths in built files...');
processDirectory(outDir);
console.log('Path fixing completed!');
