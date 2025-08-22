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
  const category = row[5] || 'Business';
  const brand = row[6] || 'Bilinmeyen';

  // String'leri temizle ve satır sonlarını düzelt
  const cleanName = String(name).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanSpecs = String(specs).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanBrand = String(brand).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();
  const cleanCategory = String(category).replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\r/g, ' ').trim();

  // Varsayılan resim yolu - placeholder resim kullan
  const webImagePath = "https://via.placeholder.com/400x300/cccccc/666666?text=Ürün+Resmi";

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
console.log('🖼️  Placeholder resimler kullanıldı');

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
