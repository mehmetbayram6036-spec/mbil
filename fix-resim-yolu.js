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

console.log(`📊 Toplam ürün sayısı: ${imageData.length}`);

// Ürünleri TypeScript formatına çevir
let productsCode = '';

imageData.forEach((row, index) => {
  const id = row[0] || index + 1;
  const imagePath = row[1] || '';
  
  // Ürün adı ve diğer bilgileri oluştur
  const name = `Ürün ${id}`;
  const price = 10000 + (id * 100); // Varsayılan fiyat
  const specs = `Ürün ${id} özellikleri`;
  const category = 'Business';
  const brand = 'Bilinmeyen';

  // String'leri temizle
  const cleanName = String(name).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanSpecs = String(specs).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanBrand = String(brand).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanCategory = String(category).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();

  // Resim yolunu web formatına çevir
  let webImagePath = "https://via.placeholder.com/400x300/cccccc/666666?text=Ürün+Resmi";
  
  if (imagePath) {
    // Virgülle ayrılmış resim yollarından ilkini al
    const firstImagePath = String(imagePath).split(',')[0].trim();
    
    if (firstImagePath.includes('\\')) {
      // Windows yolunu web yoluna çevir
      const pathParts = firstImagePath.split('\\');
      const fileName = pathParts[pathParts.length - 1]; // Son dosya adını al
      if (fileName) {
        webImagePath = `/images/${fileName}`;
      }
    } else if (firstImagePath.startsWith('/images/')) {
      // Zaten web formatında
      webImagePath = firstImagePath;
    } else if (firstImagePath.startsWith('http')) {
      // URL formatında
      webImagePath = firstImagePath;
    }
  }

  const product = `  {
    id: ${id},
    name: "${cleanName}",
    brand: "${cleanBrand}",
    price: ${price},
    specs: "${cleanSpecs}",
    image: "${webImagePath}",
    category: "${cleanCategory}"
  }`;

  productsCode += product;
  
  if (index < imageData.length - 1) {
    productsCode += ',\n';
  }
});

// page.tsx dosyasını oku
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Ürün listesini güncelle
const updatedContent = pageContent.replace(
  /const laptops: Laptop\[\] = \[[\s\S]*?\];/,
  `const laptops: Laptop[] = [\n${productsCode}\n];`
);

// Güncellenmiş içeriği dosyaya yaz
fs.writeFileSync('src/app/page.tsx', updatedContent, 'utf8');

console.log('\n✅ Ürünler başarıyla eklendi!');
console.log('📁 Güncellenmiş dosya: src/app/page.tsx');

// Özet rapor
console.log('\n📊 Eklenen Ürünler:');
imageData.slice(0, 10).forEach((row, index) => {
  const id = row[0] || index + 1;
  const imagePath = row[1] || '';
  const firstImagePath = String(imagePath).split(',')[0].trim();
  
  // Resim yolunu web formatına çevir
  let webImagePath = "Placeholder";
  if (firstImagePath.includes('\\')) {
    const pathParts = firstImagePath.split('\\');
    const fileName = pathParts[pathParts.length - 1];
    if (fileName) {
      webImagePath = `/images/${fileName}`;
    }
  } else if (firstImagePath.startsWith('http')) {
    webImagePath = firstImagePath;
  }
  
  console.log(`  ${id}. Ürün ${id} - Resim: ${webImagePath}`);
});

if (imageData.length > 10) {
  console.log(`  ... ve ${imageData.length - 10} ürün daha`);
}
