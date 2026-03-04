// Update Service Worker cache version before build
const fs = require('fs');
const path = require('path');

const swPath = path.join(__dirname, 'public', 'sw.js');
const timestamp = Date.now();

try {
  let swContent = fs.readFileSync(swPath, 'utf8');
  
  // Replace the CACHE_VERSION line with current timestamp
  swContent = swContent.replace(
    /const CACHE_VERSION = Date\.now\(\);.*$/m,
    `const CACHE_VERSION = ${timestamp}; // Updated: ${new Date().toISOString()}`
  );
  
  fs.writeFileSync(swPath, swContent, 'utf8');
  console.log(`✓ Service Worker version updated to: ${timestamp}`);
} catch (error) {
  console.error('Error updating service worker:', error);
  process.exit(1);
}
