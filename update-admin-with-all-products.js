const fs = require('fs');

// page.tsx dosyasından ürünleri oku
const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// laptops array'ini bul
const laptopsMatch = pageContent.match(/const laptops: Laptop\[\] = \[([\s\S]*?)\];/);

if (laptopsMatch) {
  const laptopsContent = laptopsMatch[1];
  
  // Her ürün bloğunu bul
  const productRegex = /\s*{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*brand:\s*"([^"]+)",\s*price:\s*(\d+),\s*specs:\s*"([^"]+)",\s*image:\s*"([^"]+)",\s*category:\s*"([^"]+)"\s*}/g;
  
  const products = [];
  let match;
  
  while ((match = productRegex.exec(laptopsContent)) !== null) {
    const product = {
      id: parseInt(match[1]),
      name: match[2],
      brand: match[3],
      price: parseInt(match[4]),
      specs: match[5],
      image: match[6],
      category: match[7]
    };
    products.push(product);
  }
  
  console.log(`📦 ${products.length} ürün bulundu.`);
  
  // Admin sayfasını oku
  let adminContent = fs.readFileSync('src/app/admin/page.tsx', 'utf8');
  
  // Mevcut ürünler array'ini güncelle
  const productsString = products.map(product => `  {
    id: ${product.id},
    name: "${product.name.replace(/"/g, '\\"')}",
    brand: "${product.brand.replace(/"/g, '\\"')}",
    price: ${product.price},
    specs: "${product.specs.replace(/"/g, '\\"').replace(/\n/g, ' ')}",
    image: "${product.image}",
    category: "${product.category.replace(/"/g, '\\"')}"
  }`).join(',\n');
  
  // existingProducts array'ini güncelle
  const updatedAdminContent = adminContent.replace(
    /const existingProducts: Product\[\] = \[[\s\S]*?\];/,
    `const existingProducts: Product[] = [\n${productsString}\n];`
  );
  
  // Dosyayı kaydet
  fs.writeFileSync('src/app/admin/page.tsx', updatedAdminContent, 'utf8');
  
  console.log('✅ Admin sayfası güncellendi!');
  console.log(`📋 ${products.length} ürün admin paneline eklendi.`);
  console.log('🌐 http://localhost:3000/admin adresine gidip "Tüm Ürünleri Yükle" butonuna tıklayın.');
  
} else {
  console.log('❌ Laptops array bulunamadı!');
}
