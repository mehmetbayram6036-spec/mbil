const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Excel dosyasını oku
const workbook = XLSX.readFile('resim yolu.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// JSON formatına çevir
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// İlk satır başlık, veriyi al
const imageData = data.slice(1);

// Mevcut resim dosyalarını kontrol et
const imagesDir = 'public/images';
const existingImages = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));

console.log('🖼️  Mevcut resimlerle ürün resimleri güncelleniyor...');
console.log(`📁 Mevcut resim sayısı: ${existingImages.length}`);

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Her ürün için resim yolunu güncelle
imageData.forEach((row, index) => {
  const productId = row[0];
  
  if (productId) {
    // Mevcut resimlerden birini seç (döngüsel olarak)
    const imageIndex = (productId - 1) % existingImages.length;
    const selectedImage = existingImages[imageIndex];
    const webImagePath = `/images/${selectedImage}`;
    
    console.log(`Ürün ${productId}: ${webImagePath} (${selectedImage})`);
    
    // page.tsx dosyasında bu ürünün resim yolunu güncelle
    const oldPattern = new RegExp(`id: ${productId},[\\s\\S]*?image: "[^"]*"`, 'g');
    const newImageLine = `image: "${webImagePath}"`;
    
    pageContent = pageContent.replace(oldPattern, (match) => {
      return match.replace(/image: "[^"]*"/, newImageLine);
    });
  }
});

// Güncellenmiş içeriği dosyaya yaz
fs.writeFileSync('src/app/page.tsx', pageContent, 'utf8');

console.log('\n✅ Tüm ürün resimleri başarıyla güncellendi!');
console.log('📁 Güncellenmiş dosya: src/app/page.tsx');

// Özet rapor
console.log('\n📊 Güncelleme Özeti:');
console.log(`📋 Toplam ürün sayısı: ${imageData.length}`);
console.log(`🖼️  Kullanılan resim sayısı: ${existingImages.length}`);
console.log('🔄 Resimler döngüsel olarak atandı');
console.log('🌐 Yollar web formatına çevrildi (/images/ klasörü)');

// Kullanılan resimleri listele
console.log('\n📋 Kullanılan resimler:');
existingImages.forEach((image, index) => {
  console.log(`${index + 1}. ${image}`);
});
