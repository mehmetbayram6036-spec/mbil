const fs = require('fs');

// Read the page.tsx file
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace all emoji images with real image paths
for (let i = 1; i <= 63; i++) {
  const emojiPattern = new RegExp(`id: ${i},[\\s\\S]*?image: "💻"`, 'g');
  const replacement = `id: ${i},$&`.replace(/image: "💻"/, `image: "/images/${i}.jpg"`);
  content = content.replace(emojiPattern, replacement);
}

// Write the updated content back to the file
fs.writeFileSync('src/app/page.tsx', content, 'utf8');

console.log('All emoji images have been replaced with real image paths!');
