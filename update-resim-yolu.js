const XLSX = require('xlsx');
const fs = require('fs');

// Excel dosyasını oku
const workbook = XLSX.readFile('../resim yolu.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// JSON formatına çevir
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('📋 Excel verisi okunuyor...');
console.log('Başlıklar:', data[0]);

// İlk satır başlık, veriyi al
const imageData = data.slice(1);

// ID-resim yolu eşleştirmesi oluştur
const imageMapping = {};
imageData.forEach(row => {
  const id = parseInt(row[0]);
  const imagePath = row[1];
  if (id && imagePath) {
    imageMapping[id] = imagePath;
  }
});

console.log(`📊 Toplam resim eşleştirmesi: ${Object.keys(imageMapping).length}`);

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ürün listesini bul ve güncelle
const productRegex = /(\s*{\s*id:\s*(\d+),[\s\S]*?image:\s*"[^"]*",[\s\S]*?})/g;

let updatedContent = pageContent;
let match;
let updatedCount = 0;

while ((match = productRegex.exec(pageContent)) !== null) {
  const fullProduct = match[1];
  const productId = parseInt(match[2]);
  
  if (imageMapping[productId]) {
    // Windows yolunu web yoluna çevir
    const windowsPath = imageMapping[productId];
    const pathParts = windowsPath.split('\\');
    const fileName = pathParts[pathParts.length - 1]; // Son dosya adını al
    
    if (fileName) {
      const webImagePath = `/images/${fileName}`;
      
      // Ürünün image alanını güncelle
      const updatedProduct = fullProduct.replace(
        /image:\s*"[^"]*"/,
        `image: "${webImagePath}"`
      );
      
      updatedContent = updatedContent.replace(fullProduct, updatedProduct);
      updatedCount++;
      
      console.log(`✅ Ürün ${productId}: ${windowsPath} -> ${webImagePath}`);
    }
  }
}

// Güncellenmiş içeriği dosyaya yaz
fs.writeFileSync('src/app/page.tsx', updatedContent, 'utf8');

console.log(`\n🎉 Toplam ${updatedCount} ürünün resmi güncellendi!`);
console.log('📁 Güncellenmiş dosya: src/app/page.tsx');
