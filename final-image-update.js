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

console.log('🖼️  Excel ID\'leri ile mevcut resimleri eşleştiriyor...');
console.log(`📋 Toplam ürün sayısı: ${imageData.length}`);
console.log(`📁 Mevcut resim sayısı: ${existingImages.length}`);

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Her ürün için resim yolunu güncelle
imageData.forEach((row) => {
  const productId = row[0];
  
  if (productId) {
    // Ürün ID'sine göre resim seç (1-63 arası)
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
console.log('🔄 Excel ID\'leri ile mevcut resimler eşleştirildi');
console.log('🌐 Yollar web formatına çevrildi (/images/ klasörü)');

// İlk 10 ürünün eşleştirmesini göster
console.log('\n📋 İlk 10 Ürün-Resim Eşleştirmesi:');
imageData.slice(0, 10).forEach((row) => {
  const productId = row[0];
  if (productId) {
    const imageIndex = (productId - 1) % existingImages.length;
    const selectedImage = existingImages[imageIndex];
    console.log(`  Ürün ${productId}: /images/${selectedImage}`);
  }
});

// Tüm eşleştirmeleri dosyaya kaydet
const mappingData = imageData.map((row) => {
  const productId = row[0];
  if (productId) {
    const imageIndex = (productId - 1) % existingImages.length;
    const selectedImage = existingImages[imageIndex];
    return {
      productId: productId,
      imagePath: `/images/${selectedImage}`,
      imageFile: selectedImage
    };
  }
  return null;
}).filter(item => item !== null);

fs.writeFileSync('image_mapping.json', JSON.stringify(mappingData, null, 2));
console.log('\n📄 Eşleştirme verileri image_mapping.json dosyasına kaydedildi');
