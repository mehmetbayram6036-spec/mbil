const fs = require('fs');

// Ürün-resim eşleştirmesini oku
const productImageMapping = JSON.parse(fs.readFileSync('product_image_mapping.json', 'utf8'));

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ürün regex'i - her ürün bloğunu bul
const productRegex = /(\s*{\s*id:\s*(\d+),[\s\S]*?image:\s*"[^"]*",[\s\S]*?})/g;

let updatedContent = pageContent;
let match;
let updatedCount = 0;

while ((match = productRegex.exec(pageContent)) !== null) {
  const fullProduct = match[1];
  const productId = parseInt(match[2]);
  
  // Bu ürün ID'si için resim yolu var mı?
  if (productImageMapping[productId]) {
    const newImagePath = productImageMapping[productId];
    
    // Ürünün image alanını güncelle
    const updatedProduct = fullProduct.replace(
      /image:\s*"[^"]*"/,
      `image: "${newImagePath}"`
    );
    
    updatedContent = updatedContent.replace(fullProduct, updatedProduct);
    updatedCount++;
    console.log(`Ürün ${productId} resmi güncellendi: ${newImagePath}`);
  }
}

// Güncellenmiş içeriği kaydet
fs.writeFileSync('src/app/page.tsx', updatedContent, 'utf8');

console.log(`\n✅ Toplam ${updatedCount} ürünün resmi güncellendi.`);
console.log('📁 page.tsx dosyası güncellendi.');
