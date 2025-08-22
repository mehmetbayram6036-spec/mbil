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

console.log('🖼️  Resim dosyaları kopyalanıyor...');

// public/images klasörünü oluştur (yoksa)
const imagesDir = 'public/images';
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('📁 public/images klasörü oluşturuldu');
}

// Her ürün için resimleri kopyala
imageData.forEach((row) => {
  const productId = row[0];
  const imagePaths = row[1];
  
  if (productId && imagePaths) {
    // Tüm resim yollarını al
    const paths = imagePaths.split(',');
    
    paths.forEach((imagePath, index) => {
      const cleanPath = imagePath.trim();
      
      // Dosya var mı kontrol et
      if (fs.existsSync(cleanPath)) {
        // Hedef dosya adını oluştur
        const fileName = path.basename(cleanPath);
        const targetPath = path.join(imagesDir, fileName);
        
        try {
          // Dosyayı kopyala
          fs.copyFileSync(cleanPath, targetPath);
          console.log(`✅ Ürün ${productId} - Resim ${index + 1}: ${fileName} kopyalandı`);
        } catch (error) {
          console.log(`❌ Ürün ${productId} - Resim ${index + 1}: ${fileName} kopyalanamadı - ${error.message}`);
        }
      } else {
        console.log(`⚠️  Dosya bulunamadı: ${cleanPath}`);
      }
    });
  }
});

console.log('\n🎉 Resim kopyalama işlemi tamamlandı!');
console.log(`📁 Hedef klasör: ${imagesDir}`);

// Kopyalanan dosyaları listele
const copiedFiles = fs.readdirSync(imagesDir);
console.log(`📊 Toplam ${copiedFiles.length} dosya kopyalandı`);
