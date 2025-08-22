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
  
  console.log(`📦 ${products.length} ürün bulundu ve admin paneline yüklendi.`);
  
  // Admin paneli için JavaScript kodu oluştur
  const adminScript = `
// Admin paneline ürünleri yüklemek için bu kodu tarayıcı konsolunda çalıştırın:

const products = ${JSON.stringify(products, null, 2)};

// LocalStorage'a kaydet
localStorage.setItem('products', JSON.stringify(products));

// Sayfayı yenile
window.location.reload();

console.log('✅ ${products.length} ürün admin paneline yüklendi!');
`;

  // Dosyayı kaydet
  fs.writeFileSync('admin-load-script.js', adminScript, 'utf8');
  
  console.log('📄 admin-load-script.js dosyası oluşturuldu.');
  console.log('🔧 Bu dosyayı tarayıcı konsolunda çalıştırarak ürünleri admin paneline yükleyebilirsiniz.');
  console.log('📋 İlk 5 ürün:');
  products.slice(0, 5).forEach(product => {
    console.log(`   - ${product.id}: ${product.name}`);
  });
  
} else {
  console.log('❌ Laptops array bulunamadı!');
}





