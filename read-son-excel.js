const XLSX = require('xlsx');
const fs = require('fs');

// Son.xlsx dosyasını oku
const workbook = XLSX.readFile('../son.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// JSON'a çevir
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
const productData = data.slice(1); // Header satırını atla

console.log('Excel verisi:');
productData.forEach((row, index) => {
  console.log(`Satır ${index + 1}:`, row);
});

// Ürün ID'si ve resim yolu eşleştirmesi
const productImageMapping = {};

productData.forEach((row) => {
  const productId = parseInt(row[0]) || 0; // Ürün numarası
  const imagePath = row[4] || ''; // Resim yolu
  
  if (productId && imagePath) {
    // Windows yolunu web yoluna çevir
    let webImagePath = '';
    if (imagePath.includes('\\')) {
      const pathParts = imagePath.split('\\');
      const fileName = pathParts[pathParts.length - 1];
      if (fileName) {
        webImagePath = `/images/${fileName}`;
      }
    } else if (imagePath.startsWith('/images/')) {
      webImagePath = imagePath;
    } else if (imagePath.startsWith('http')) {
      webImagePath = imagePath;
    }
    
    if (webImagePath) {
      productImageMapping[productId] = webImagePath;
      console.log(`Ürün ${productId} -> ${webImagePath}`);
    }
  }
});

// Eşleştirmeyi JSON dosyasına kaydet
fs.writeFileSync('product_image_mapping.json', JSON.stringify(productImageMapping, null, 2), 'utf8');
console.log('\nEşleştirme tamamlandı ve product_image_mapping.json dosyasına kaydedildi.');
