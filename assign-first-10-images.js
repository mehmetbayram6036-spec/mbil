const fs = require('fs');

// Resim dosyalarını oku
const imageFiles = [
  '1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG',
  '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG'
];

console.log('📋 Resim dosyaları hazırlanıyor...');
console.log('Resimler:', imageFiles);

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ürün listesini bul ve güncelle
const productRegex = /(\s*{\s*id:\s*(\d+),[\s\S]*?image:\s*"[^"]*",[\s\S]*?})/g;

let updatedContent = pageContent;
let match;
let updatedCount = 0;
let productIndex = 0;

while ((match = productRegex.exec(pageContent)) !== null && productIndex < 10) {
  const fullProduct = match[1];
  const productId = parseInt(match[2]);
  
  if (productIndex < imageFiles.length) {
    const imageFile = imageFiles[productIndex];
    const webImagePath = `/images/${imageFile}`;
    
    // Ürünün image alanını güncelle
    const updatedProduct = fullProduct.replace(
      /image:\s*"[^"]*"/,
      `image: "${webImagePath}"`
    );
    
    updatedContent = updatedContent.replace(fullProduct, updatedProduct);
    updatedCount++;
    
    console.log(`✅ Ürün ${productId}: ${webImagePath}`);
  }
  
  productIndex++;
}

// Güncellenmiş içeriği dosyaya yaz
fs.writeFileSync('src/app/page.tsx', updatedContent, 'utf8');

console.log(`\n🎉 Toplam ${updatedCount} ürünün resmi güncellendi!`);
console.log('📁 Güncellenmiş dosya: src/app/page.tsx');
