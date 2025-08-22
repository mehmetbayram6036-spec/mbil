const XLSX = require('xlsx');
const fs = require('fs');

// Excel dosyasını oku
const workbook = XLSX.readFile('../son.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// JSON formatına çevir
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('📋 Excel verisi okunuyor...');
console.log('Başlıklar:', data[0]);

// İlk satır başlık, veriyi al
const productData = data.slice(1);

console.log(`📊 Toplam ürün sayısı: ${productData.length}`);

// Excel sütun sırası: [Ürün numarası, Ürünün tam adı, Fiyat, Özellikler, Resim Yolu, Kategori, Marka]
// Doğru eşleştirme: [id, name, price, specs, image, category, brand]

// Ürünleri TypeScript formatına çevir
let productsCode = '';

productData.forEach((row, index) => {
  const id = row[0] || index + 1;
  const name = row[1] || `Ürün ${id}`;
  const price = row[2] || 0;
  const specs = row[3] || 'Özellikler belirtilmemiş';
  const imagePath = row[4] || `/images/${id}.jpg`;
  const category = row[5] || 'Business';
  const brand = row[6] || 'Bilinmeyen';

  // Resim yolunu web formatına çevir
  let webImagePath = imagePath;
  if (imagePath.includes('\\')) {
    // Windows yolunu web yoluna çevir
    const fileName = imagePath.split('\\').pop(); // Son dosya adını al
    webImagePath = `/images/${fileName}`;
  }

  const product = `  {
    id: ${id},
    name: "${name}",
    brand: "${brand}",
    price: ${price},
    specs: "${specs.replace(/"/g, '\\"')}",
    image: "${webImagePath}",
    category: "${category}"
  }`;

  productsCode += product;
  
  if (index < productData.length - 1) {
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
productData.slice(0, 5).forEach((row, index) => {
  const id = row[0] || index + 1;
  const name = row[1] || `Ürün ${id}`;
  const brand = row[6] || 'Bilinmeyen';
  const price = row[2] || 0;
  console.log(`  ${id}. ${name} (${brand}) - ${price} TL`);
});

if (productData.length > 5) {
  console.log(`  ... ve ${productData.length - 5} ürün daha`);
}
