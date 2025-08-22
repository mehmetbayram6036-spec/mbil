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
console.log('\n📝 İlk 5 satır:');
imageData.slice(0, 5).forEach((row, index) => {
  console.log(`Satır ${index + 1}:`, row);
});

// JSON dosyasına kaydet
fs.writeFileSync('excel_resim_data.json', JSON.stringify(data, null, 2), 'utf8');
console.log('\n✅ Veri excel_resim_data.json dosyasına kaydedildi.');
