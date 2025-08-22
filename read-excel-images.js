const XLSX = require('xlsx');
const fs = require('fs');

// Excel dosyasını oku
const workbook = XLSX.readFile('resim yolu.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// JSON formatına çevir
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('Excel verisi:');
console.log(data);

// İlk satır başlık olabilir, kontrol et
const headers = data[0];
console.log('Başlıklar:', headers);

// Veriyi daha okunabilir formatta göster
data.slice(1).forEach((row, index) => {
  console.log(`Satır ${index + 1}:`, row);
});

// Dosyayı JSON olarak kaydet
fs.writeFileSync('excel_image_data.json', JSON.stringify(data, null, 2));
console.log('Excel verisi excel_image_data.json dosyasına kaydedildi.');
