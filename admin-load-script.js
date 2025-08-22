
// Admin paneline ürünleri yüklemek için bu kodu tarayıcı konsolunda çalıştırın:

const products = [
  {
    "id": 891,
    "name": "MACBOOK PRO BARLI 2019  İŞLEMCİ İ9 DİSK 1 TB NVME 16 GB RAM",
    "brand": "Apple",
    "price": 28500,
    "specs": "MACBOOK PRO 2019 TOUCH BARLI   2019 MODEL  İ9 İŞLEMCİ  1 TB NVME  16 GB RAM  RADEON PRO 550M HARİCİ 4 GB EKRAN KARTI  16 İNÇ EKRAN BOYUTU  PİL DEVİR : 376",
    "image": "/images/1.jpg",
    "category": "Business"
  },
  {
    "id": 890,
    "name": "MACBOOK PRO BARLI 2018  İŞLEMCİ İ7 DİSK 512 NVME 16 GB RAM",
    "brand": "Apple",
    "price": 19500,
    "specs": "MACBOOK PRO 2018 TOUCH BARLI   2018 MODEL  İ7 İŞLEMCİ  512 NVME  16 GB RAM  RADEON PRO 560X HARİCİ 4 GB EKRAN KARTI  15 İNÇ EKRAN BOYUTU  PİL DEVİR : 311",
    "image": "/images/2.jpg",
    "category": "Business"
  },
  {
    "id": 888,
    "name": "DELL PRECISION İ9 11. NESİL 48 GB RAM 512 M2SSD RTX A2000",
    "brand": "Dell",
    "price": 43500,
    "specs": "DELL PRECISION 7560   İŞLEMCİ : İ9 11. NESİL     RAM : 48 GB RAM   SSD : 512 M2SSD   GRAFİK : NVIDIA GEFORCE RTX A2000 HARİCİ 4 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/3.jpg",
    "category": "Business"
  },
  {
    "id": 887,
    "name": "FİJUTSU LİFEBOOK İ7 8. NESİL İŞLEMCİ 16 GB RAM 512 M2SSD",
    "brand": "Diğer",
    "price": 11500,
    "specs": "FİJUTSU LİFEBOOK U   İŞLEMCİ : İ7 8. NESİL   RAM : 16 GB RAM   SSD : 512 M2SSD   GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     WİNDOWS VE OFİS LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/4.jpg",
    "category": "Business"
  },
  {
    "id": 886,
    "name": "THİNKPAD X1 CARBON İ5 11. NESİL 16 GB RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 23500,
    "specs": "THİNKPAD X1 CARBON    İŞLEMCİ : İ5 11. NESİL   RAM : 16 GB RAM   SSD : 256 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE  SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/5.jpg",
    "category": "Business"
  },
  {
    "id": 885,
    "name": "LENOVO T580 İ5 8. NESİL 16 GB RAM 256 NVME DOKUNMATİK",
    "brand": "Lenovo",
    "price": 12500,
    "specs": "DOKUNMATİK ÇİFT BATARYA  LENOVO THİNKPAD T580     İŞLEMCİ : İ5 8. NESİL   RAM : 16 GB RAM   SSD : 256 NVME   GRAFİK : İNTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/6.jpg",
    "category": "Business"
  },
  {
    "id": 875,
    "name": "DELL İ5 8. NESİL İŞLEMCİ 16 GB RAM 512 M2SSD",
    "brand": "Dell",
    "price": 9800,
    "specs": "MODEL DELL LATİTUDE 7390   İŞLEMCİ İ5 8. NESİL İŞLEMCİ   BELLEK : 16 GB DDR4    SSD : 512 M2SSD  GRAFİK : İNTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 12.5 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/7.jpg",
    "category": "Business"
  },
  {
    "id": 870,
    "name": "LENOVO İ7 8. NESİL 16 GB RAM 512 M2SSD MX150",
    "brand": "Lenovo",
    "price": 12500,
    "specs": "İŞLEMCİ : İ7 8. NESİL    RAM : 16 GB RAM   SSD : 512 M2SSD   GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 8 GB EKRAN KARTI  GRAFİK : NVIDIA GEFORCE MX 150 HARİCİ 2 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 10 PRO KULLANIMA HAZIR   IŞIKLI KLAVYE    WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/8.jpg",
    "category": "Business"
  },
  {
    "id": 868,
    "name": "THİNKPAD X1 CARBON İ5 10. NESİL 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "Lenovo",
    "price": 17500,
    "specs": "THİNKPAD X1 CARBON  8. GENERATİON   İŞLEMCİ : İ5 10. NESİL   RAM : 16 GB RAM   SSD : 256 M2SSD  GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/9.jpg",
    "category": "Business"
  },
  {
    "id": 867,
    "name": "ASUS ZENBOOK  İ7 10. NESİL 16 GB RAM 512 M2SSD",
    "brand": "Asus",
    "price": 17500,
    "specs": "ZENBOOK UX425JA   İŞLEMCİ : İ7 10. NESİL    RAM : 16 GB RAM   SSD : 512 M2SSD   GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 10 PRO KULLANIMA HAZIR   IŞIKLI KLAVYE    WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/10.jpg",
    "category": "Business"
  },
  {
    "id": 860,
    "name": "SAMSUNG İ5 11. NESİL 8 GB RAM 512 M2SSD",
    "brand": "Samsung",
    "price": 14500,
    "specs": "İŞLEMCİ : İ5 11. NESİL   RAM : 8 GB RAM   SSD :  512 M2SSD  GRAFİK : INTEL IRIS DARİCİ 4 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIĞI % 93  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/11.jpg",
    "category": "Business"
  },
  {
    "id": 855,
    "name": "LENOVO THİNKPAD T14S  İ5 10. NESİL 8 RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 13500,
    "specs": "MODEL: T14S   İŞLEMCİ : İ5 10. NESİL   RAM : 8 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 4 GB EKRAN KARTI  EKRAN : 14 İNÇ EKRAN BOYUTU  PİL SAĞLIĞI % DE 97 SAĞLIKLI  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/12.jpg",
    "category": "Business"
  },
  {
    "id": 852,
    "name": "LENOVO YOGA İ5 11.NESİL 8 GB RAM 512 M2SSD KATLANIR DOKUNMATİK",
    "brand": "Lenovo",
    "price": 15500,
    "specs": "LENOVO YOGA   TAM KATLANIR DOKUNMATİK  İ5 11 NESİL  8 GB RAM  512 M2SSD  14 İNÇ EKRAN BOYUTU  ORJİNAL TYPE-C ŞARJ ALETİ  IŞIKLI KLAVYE  BATARYA % DE 100 SAĞLIKLI    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/13.jpg",
    "category": "Business"
  },
  {
    "id": 850,
    "name": "ASUS VİVOBOOK İ3 10. NESİL 8 GB RAM 256 M2SSD",
    "brand": "Asus",
    "price": 9800,
    "specs": "ASUS VİVOBOOK   İŞLEMCİ : İ3 10. NESİL    RAM : 8 GB RAM   SSD : 256 M2SSD   GRAFİK : INTEL HD GRAPHIC DAHİLİ 4 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/14.jpg",
    "category": "Business"
  },
  {
    "id": 849,
    "name": "DELL XPS İ7 6. NESİL 16 GB RAM 512 M2SSD DOKUNMATİK",
    "brand": "Dell",
    "price": 12750,
    "specs": "DELL XPS 13 9350 DOKUNMATİK  İŞLEMCİ : İ7 6. NESİL   RAM : 16 GB RAM   SSD :  512 M2SSD  IŞIKLI KLAVYE  GRAFİK : INTEL DAHİLİ 8 GB EKRAN KARTI  EKRAN : 13 İNÇ EKRAN BOYUTU        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/15.jpg",
    "category": "Business"
  },
  {
    "id": 832,
    "name": "ASUS TUF İ5 11. NESİL 16 GB RAM 512 M2SSD RTX 3060",
    "brand": "Asus",
    "price": 27000,
    "specs": "ASUS TUF DASH F15   İŞLEMCİ : İ5 11. NESİL   RAM : 16 GB RAM   SSD :  512 M2SSD  GRAFİK : NVİDİA GEFORCE  RTX 3060 HARİCİ 6 GB  15.6 İNÇ EKRAN BOYUTU  ORJİNAL ŞARJ ALETİ  144 HZ EKRAN TAZELEME  RGB KLAVYE IŞIKLI   KOZMETİK SIFIR AYARINDA      WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/16.jpg",
    "category": "Business"
  },
  {
    "id": 829,
    "name": "LENOVO GAMİNG RYZEN 5 İŞLEMCİ 32 GB RAM 512 M2SSD GTX 1650 Tİ",
    "brand": "Lenovo",
    "price": 17500,
    "specs": "İŞLEMCİ : RYZEN 5 4600H İŞLEMCİ   RAM : 32 GB RAM   SSD     : 512 M2SSD  GRAFİK : NVİDİA GTX 1650 Tİ  HARİCİ 4 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR  TESLİM SONRASINDA ÖDEME YAPABİLİRSİNİZ  KAPIDA ÖDEMEDİR                               Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100 Metre                 Küçükçekmece Metrobüs durağına 450 Metre     Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/17.jpg",
    "category": "Business"
  },
  {
    "id": 828,
    "name": "THİNKPAD P51  İ7 7. NESİL 32 GB RAM 256 M2SSD NVİDİA M1200M",
    "brand": "Lenovo",
    "price": 19500,
    "specs": "MODEL P51   İŞLEMCİ İ7 7. NESİL İŞLEMCİ   BELLEK : 32 GB DDR4    SSD : 256 M2SSD  GRAFİK : NVİDİA QUADRO M1200M HARİCİ 4 GB EKRAN KARTI  GRAFİK : İNTEL HD GRAPHIC DAHİLİ 20 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR   IŞIKLI KLAVYE    WİNDOWS VE OFİS PROGRAMLARI LİSANSLI KURULUDUR    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/18.jpg",
    "category": "Business"
  },
  {
    "id": 824,
    "name": "HUAWEİ i7 10. NESİL  16 GB RAM 1TB M2SSD MX250 DOKUNMATİK",
    "brand": "Huawei",
    "price": 23500,
    "specs": "MATEBOOK X PRO  DOKUNMATİK EKRAN   İŞLEMCİ : İ7 10. NESİL İŞLEMCİ    BELLEK : 16 GB DDR 4    SSD : 1 TB M2SSD   GRAFİK : NVIDIA GEFORCE MX250 HARİCİ 2 GB HARİCİ EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE    SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR",
    "image": "/images/19.jpg",
    "category": "Business"
  },
  {
    "id": 822,
    "name": "SAMSUNG İ5 13. NESİL 8 GB RAM 256 M2SSD KATLANIR DOKUNMATİK",
    "brand": "Samsung",
    "price": 19500,
    "specs": "SAMSUNG TAM KATLANIR DOKUNMATİK   İŞLEMCİ : İ5 13. NESİL   RAM : 8 GB RAM   SSD : 256 M2SSD   GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 4 GB EKRAN KARTI   EKRAN : 13.3 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/20.jpg",
    "category": "Business"
  },
  {
    "id": 819,
    "name": "THİNKPAD P16 WORKSTATİON İ7 12. NESİL 48 GB RAM 1 TB M2SSD",
    "brand": "Lenovo",
    "price": 52000,
    "specs": "THİNKPAD P16 WORKSTATİON   İŞLEMCİ : İ7 12. NESİL İŞLEMCİ   RAM : 48 GB RAM   SSD : 1 TB  M2SSD  GRAFİK : NVİDİA RTX A1000 HARİCİ 4 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/21.jpg",
    "category": "Business"
  },
  {
    "id": 816,
    "name": "ASUS  İ5 7. NESİL 8 GB RAM 512 M2SSD GEFORCE 940 MX",
    "brand": "Asus",
    "price": 10500,
    "specs": "İŞLEMCİ : İ5 7. NESİL İŞLEMCİ     RAM : 8 GB RAM   SSD : 512 M2SSD   GRAFİK : INTEL UHD GRAPHIC DAHİLİ 4 GB EKRAN KARTI  GRAFİK : NVIDIA GEFORCE 940MX HARİCİ 2 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/22.jpg",
    "category": "Business"
  },
  {
    "id": 815,
    "name": "HP ZBOOK İ7 10. NESİL 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 17500,
    "specs": "HP ZBOOK FIREFLY 14 G7  İŞLEMCİ : İ7 10. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB  14 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/23.jpg",
    "category": "Business"
  },
  {
    "id": 813,
    "name": "DELL İ5 7. NESİL İŞLEMCİ 8 GB RAM 256 M2SSD DOKUNMATİK EKRAN",
    "brand": "Dell",
    "price": 10250,
    "specs": "MODEL DELL LATİTUDE 5490    İŞLEMCİ İ5 7. NESİL İŞLEMCİ   BELLEK : 8 GB DDR4    SSD : 256 M2SSD  GRAFİK : İNTEL UHD GRAPHIC DAHİLİ 4 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/24.jpg",
    "category": "Business"
  },
  {
    "id": 812,
    "name": "DELL İ5 8. NESİL İŞLEMCİ 8 GB RAM 256 M2SSD DOKUNMATİK EKRAN",
    "brand": "Dell",
    "price": 10500,
    "specs": "MODEL DELL LATİTUDE 5490    İŞLEMCİ İ5 8. NESİL İŞLEMCİ   BELLEK : 8 GB DDR4    SSD : 256 M2SSD  GRAFİK : İNTEL UHD GRAPHIC DAHİLİ 4 GB EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/25.jpg",
    "category": "Business"
  },
  {
    "id": 809,
    "name": "ASUS VİVOBOOK İ3-N305 İŞLEMCİ 8 GB RAM 128 M2SSD",
    "brand": "Asus",
    "price": 11500,
    "specs": "ASUS VİVOBOOK   İŞLEMCİ : İ3-N305   RAM : 8 GB RAM   SSD :  128 M2SSD  GRAFİK : INTEL IRIS DAHİLİ 4 GB EKRAN KARTI  14 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  IŞIKLI KLAVYE  BATARYA SAĞLIĞI % 99  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/26.jpg",
    "category": "Business"
  },
  {
    "id": 808,
    "name": "SAMSUNG GALAXY BOOK İ7 13. NESİL 16 GB RAM 512 M2SSD",
    "brand": "Samsung",
    "price": 32500,
    "specs": "GALAXY BOOK  İŞLEMCİ : İ7 13. NESİL   RAM : 16 GB RAM   SSD :  512 M2SSD  GRAFİK : INTEL IRIS DARİCİ 8 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/27.jpg",
    "category": "Business"
  },
  {
    "id": 799,
    "name": "HP ELİTBOOK RYZEN 5 6650U İŞLEMCİ 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "HP",
    "price": 16500,
    "specs": "DOKUNMATİK EKRAN  HP ELİTBOOK845 G9  İŞLEMCİ : RYZEN 5 6650U İŞLEMCİ   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : AMD RADEON  DAHİLİ 8 GB EKRAN KARTI  IŞIKLI KLAVYE  KOZMETİK SİFİR AYARINDA  ORJİNAL ŞARJ ALETİ  14 İNÇ EKRAN BOYUTU      PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/28.jpg",
    "category": "Business"
  },
  {
    "id": 798,
    "name": "HP ZBOOK İ7 10. NESİL 32 GB RAM 512 M2SSD QUADRO P520",
    "brand": "HP",
    "price": 26500,
    "specs": "HP ZBOOK FURY G7  İŞLEMCİ : İ7 10. NESİL   RAM : 32 GB RAM   SSD :  512 M2SSD  GRAFİK : NVİDİA QUADRO P520 HARİCİ 4 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/29.jpg",
    "category": "Business"
  },
  {
    "id": 797,
    "name": "HP OMEN İ5 9. NESİL 16 GB RAM 256 M2SSD GTX 1660 Tİ",
    "brand": "HP",
    "price": 19250,
    "specs": "HP OMEN 15-DC1XXX   İŞLEMCİ : İ5 9. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : NVİDİA GEFORCE GTX 1660 Tİ HARİCİ 6 GB EKRAN KARTI   IŞIKLI KLAVYE RGB  ORJİNAL ŞARJ ALETİ  15.6 İNÇ EKRAN BOYUTU    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/30.jpg",
    "category": "Business"
  },
  {
    "id": 790,
    "name": "HP ZBOOK İ7 8. NESİL 16 GB RAM 1 TB M2SSD QUADRO P1000",
    "brand": "HP",
    "price": 19500,
    "specs": "HP ZBOOK STUDİO G5  İŞLEMCİ : İ7 8 NESİL   RAM : 16 GB RAM   SSD :  1 TB M2SSD  GRAFİK : NVİDİA QUADRO P1000 HARİCİ 4 GB  15.6 İNÇ EKRAN BOYUTU  ORJİNAL ŞARJ ALETİ  KOZMETİK ÇOK İYİ DURUMDA  IŞIKLI KLAVYE    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/31.jpg",
    "category": "Business"
  },
  {
    "id": 787,
    "name": "HP ELİTBOOK RYZEN 5 PRO İŞLEMCİ 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "HP",
    "price": 13500,
    "specs": "DOKUNMATİK EKRAN  HP ELİTBOOK 845 G7  RYZEN 5 PRO 4650U İŞLEMCİ  16 GB RAM  256 M2SSD  14 İNÇ EKRAN BOYUTU  ORJİNAL ŞARJ ALETİ  KOZMETİĞİ SIFIR AYARINDA    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/32.jpg",
    "category": "Business"
  },
  {
    "id": 783,
    "name": "HP ZBOOK İ7 10. NESİL 32 GB RAM 1 TB M2SSD QUADRO T1200",
    "brand": "HP",
    "price": 29500,
    "specs": "HP ZBOOK FURY G7  İŞLEMCİ : İ7 10. NESİL   RAM : 32 GB RAM   SSD :  1 TB M2SSD  GRAFİK : NVİDİA QUADRO T1200 HARİCİ 4 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/33.jpg",
    "category": "Business"
  },
  {
    "id": 782,
    "name": "HP ZBOOK İ7 11. NESİL 32 GB RAM 1 TB M2SSD QUADRO RTX A3000",
    "brand": "HP",
    "price": 38500,
    "specs": "HP ZBOOK FURY G8  İŞLEMCİ : İ7 11. NESİL   RAM : 32 GB RAM   SSD :  1 TB M2SSD  GRAFİK : NVİDİA QUADRO RTX A3000 HARİCİ 6 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/34.jpg",
    "category": "Business"
  },
  {
    "id": 762,
    "name": "MACBOOK AİR 2012  İ5 İŞEMCİ 4 RAM 120 SSD",
    "brand": "Apple",
    "price": 5250,
    "specs": "MACBOOK AİR 2012  İ5 İŞEMCİ  4 RAM  120 SSD  DEVİR SAYISI 670    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/35.jpg",
    "category": "Business"
  },
  {
    "id": 758,
    "name": "HUAWEİ i5 8. NESİL  8 GB RAM 256 M2SSD GEFORCE MX150",
    "brand": "Huawei",
    "price": 11500,
    "specs": "İŞLEMCİ : İ5 8. NESİL İŞLEMCİ    BELLEK : 8 GB DDR 4    SSD : 256 M2SSD   GRAFİK : INTEL UHD GRAPHIC DAHİLİ 4 GB EKRAN KARTI  GRAFİK : NVIDIA GEFORCE MX150 HARİCİ 2 GB HARİCİ EKRAN KARTI   EKRAN : 14 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE    SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR        Fatih mahallesi Küçükçekmece Meydan        Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/36.jpg",
    "category": "Business"
  },
  {
    "id": 755,
    "name": "THİNKPAD X1 CARBON İ5 8. NESİL 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "Lenovo",
    "price": 15500,
    "specs": "THİNKPAD X1 CARBON  7. GENERATİON   İŞLEMCİ : İ5 8. NESİL   RAM : 16 GB RAM   SSD : 256 M2SSD  GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14.1 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/37.jpg",
    "category": "Business"
  },
  {
    "id": 745,
    "name": "MACBOOK PRO İ5 İŞLEMCİ 8 GB RAM 256 M2SSD TOUCH BARLI",
    "brand": "Apple",
    "price": 18500,
    "specs": "MACBOOK PRO  TOUCH BARLI  2019 MODEL  İ5 İŞLEMCİ  256 M2SSD  8 GB RAM  13 İNÇ EKRAN BOYUTU  PİL DEVİR : 513  ORJİNAL ŞARJ ALETİ",
    "image": "/images/38.jpg",
    "category": "Business"
  },
  {
    "id": 739,
    "name": "ZBOOK İ7 11. NESİL 16 GB RAM 512 M2SSD QUADRO T1200",
    "brand": "HP",
    "price": 32500,
    "specs": "HP ZBOOK FURY G8  İŞLEMCİ : İ7 11. NESİL   RAM : 16 GB RAM   SSD :  512 M2SSD  GRAFİK : NVİDİA QUADRO T1200 HARİCİ 4 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA % 90 SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/39.jpg",
    "category": "Business"
  },
  {
    "id": 738,
    "name": "THİNKPAD İ7 10. NESİL 32 GB RAM 1 TB M2SSD QUADRO T2000",
    "brand": "Lenovo",
    "price": 28500,
    "specs": "THİNKPAD WORKSTATİON P15  İŞLEMCİ : İ7 10. NESİL   RAM : 32 GB RAM   SSD :  1 TB M2SSD  GRAFİK : NVİDİA QUADRO T2000 HARİCİ 4 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  BATARYA % 100 SAĞLIKLI  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/40.jpg",
    "category": "Business"
  },
  {
    "id": 736,
    "name": "HP PROBOOK İ5 11. NESİL 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 14500,
    "specs": "HP PROBOOK 650 G8  İŞLEMCİ : İ5 11. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL IRIS DAHİLİ 8 GB EKRAN KARTI  15.6 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  IŞIKLI KLAVYE  ORJİNAL ŞARJ ALETİ      PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/41.jpg",
    "category": "Business"
  },
  {
    "id": 724,
    "name": "HP ELİTBOOK İ7 11. NESİL 16 GB RAM 512 M2SSD",
    "brand": "HP",
    "price": 16500,
    "specs": "HP ELİTBOOK 840 G8  İŞLEMCİ : İ7 11. NESİL   RAM : 16 GB RAM   SSD :  512 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 8 GB EKRAN KARTI  14.1 İNÇ EKRAN BOYUTU  KOZMETİK ÇOK İYİ DURUMDA  ORJİNAL ŞARJ ALETİ  IŞIKLI KLAVYE        PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m",
    "image": "/images/42.jpg",
    "category": "Business"
  },
  {
    "id": 720,
    "name": "HP ZBOOK İ7 8. NESİL 32 GB RAM 256 M2SSD QUADRO P2000",
    "brand": "HP",
    "price": 19500,
    "specs": "HP ZBOOK 15 G5  İŞLEMCİ : İ7 8 NESİL   RAM : 32 GB RAM   SSD :  256 M2SSD  GRAFİK : NVİDİA QUADRO P2000 HARİCİ 4 GB  15.6 İNÇ EKRAN BOYUTU  ORJİNAL ŞARJ ALETİ  KOZMETİK ÇOK İYİ DURUMDA  IŞIKLI KLAVYE    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/43.jpg",
    "category": "Business"
  },
  {
    "id": 701,
    "name": "HP ELİTBOOK 845 G8  RYZEN 5 PRO 5650U İŞLEMCİ 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 13900,
    "specs": "DOKUNMATİK EKRAN  HP ELİTBOOK 845 G8  RYZEN 5 PRO 5650U İŞLEMCİ  16 GB RAM  256 M2SSD  14 İNÇ EKRAN BOYUTU  ORJİNAL ŞARJ ALETİ  KOZMETİĞİ SIFIR AYARINDA    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/44.jpg",
    "category": "Business"
  },
  {
    "id": 695,
    "name": "THİNKPAD P15 WORKSTATİON İ7 11. NESİL 32 GB RAM 1 TB M2SSD",
    "brand": "Lenovo",
    "price": 40500,
    "specs": "THİNKPAD P15 WORKSTATİON   İŞLEMCİ : İ7 11. NESİL İŞLEMCİ   RAM : 32 GB RAM   SSD : 1 TB  M2SSD  GRAFİK : NVİDİA RTX A3000 HARİCİ 6 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE  BATARYA YÜZDE 100 SAĞLIKLI   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/45.jpg",
    "category": "Business"
  },
  {
    "id": 694,
    "name": "LENOVO THİNKPAD L13  İ3 11. NESİL 8 GB RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 11500,
    "specs": "LENOVO THİNKPAD L13    İŞLEMCİ : İ3 11. NESİL   RAM : 8 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 4 GB EKRAN KARTI  EKRAN : 14 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/46.jpg",
    "category": "Business"
  },
  {
    "id": 693,
    "name": "HP ELİTBOOK İ5 11. NESİL 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 13500,
    "specs": "HP ELİTBOOK 840 G8   İŞLEMCİ : İ5 11. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/47.jpg",
    "category": "Business"
  },
  {
    "id": 645,
    "name": "HP İ5 10. NESİL 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "HP",
    "price": 13250,
    "specs": "HP ELİTBOOK 840 G7 DOKUNMATİK  İŞLEMCİ : İ5 10. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14.1 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/48.jpg",
    "category": "Business"
  },
  {
    "id": 622,
    "name": "THİNKPAD X13 GEN2  İ5 11. NESİL 8 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "Lenovo",
    "price": 15500,
    "specs": "THİNKPAD X13 GEN2  DOKUNMATİK   İŞLEMCİ : İ5 11. NESİL     RAM : 8 GB RAM   SSD : 256 M2SSD  GRAFİK : INTEL IRIS GRAPHIC DAHİLİ 4 GB EKRAN KARTI  EKRAN : 13.3 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE  BATARYA YÜZDE 100  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/49.jpg",
    "category": "Business"
  },
  {
    "id": 604,
    "name": "DELL PRECISION İ7 10. NESİL 32 GB RAM 512 M2SSD RTX 3000",
    "brand": "Dell",
    "price": 31500,
    "specs": "DELL PRECISION 7550   İŞLEMCİ : İ7 10. NESİL     RAM : 32 GB RAM   SSD : 512 M2SSD   GRAFİK : INTEL UHD GRAPHIC DAHİLİ 16 GB EKRAN KARTI  GRAFİK : NVIDIA GEFORCE RTX 3000 HARİCİ 6 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/50.jpg",
    "category": "Business"
  },
  {
    "id": 584,
    "name": "THİNKPAD P53  İ7 9. NESİL 32 GB RAM 512 M2SSD QUADRO T1000",
    "brand": "Lenovo",
    "price": 25500,
    "specs": "THİNKPAD P53   İŞLEMCİ : İ7 9. NESİL   RAM : 32 GB RAM   SSD :  512 M2SSD   GRAFİK : İNTEL UHD GRAPHIC DAHİLİ 16 GB EKRAN KARTI  GRAFİK : NVIDIA QUADRO T1000 HARICI 4 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE  PİL SAĞLIĞI 100 DE 87   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/51.jpg",
    "category": "Business"
  },
  {
    "id": 557,
    "name": "ASUS ZENBOOK RYZEN 5 İŞLEMCİ 8 GB RAM 512 M2SSD",
    "brand": "Asus",
    "price": 16900,
    "specs": "ASUS ZENBOOK   İŞLEMCİ : RYZEN 5 4500U     RAM : 8 GB RAM   SSD : 512 M2SSD   GRAFİK : AMD RADEON DAHİLİ 4 GB EKRAN KARTI   EKRAN : 13.3 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR",
    "image": "/images/52.jpg",
    "category": "Business"
  },
  {
    "id": 478,
    "name": "THİNKPAD P50  İ7 6. NESİL 32 GB RAM 256 SSD  QUADRO M1000M",
    "brand": "Lenovo",
    "price": 12750,
    "specs": "İŞLEMCİ : İ7 6. NESİL   RAM : 16 GB RAM   SSD : 256 m2SSD   GRAFİK : INTEL HD GRAPHIC DAHİLİ 16 GB EKRAN KARTI  GRAFİK : NVIDIA QUADRO M100M HARİCİ 2 GB EKRAN KARTI   EKRAN : 15.6 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR           PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/53.jpg",
    "category": "Business"
  },
  {
    "id": 453,
    "name": "LENOVO THİNKPAD İ5 11. NESİL 16 GB RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 13500,
    "specs": "LENOVO THİNKPAD L14   İŞLEMCİ : İ5 11. NESİL İŞLEMCİ   RAM : 16 GB RAM   SSD : 256 M2SSD  GRAFİK : İNTEL IRIS XE GRAPHİC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14.1 İNÇ EKRAN BOYUTU   IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/54.jpg",
    "category": "Business"
  },
  {
    "id": 418,
    "name": "HP AMD RYZEN 5 PRO İŞLEMCİ 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 12900,
    "specs": "İŞLEMCİ : RYZEN 5 PRO 4650U İŞLEMCİ   BELLEK : 16 GB DDR 4    SSD : 256  M2SSD  GRAFİK : AMD RADEON GRAPHİC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 13.3 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/55.jpg",
    "category": "Business"
  },
  {
    "id": 405,
    "name": "HP İ5 13. NESİL İŞLEMCİ 16 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 19200,
    "specs": "İŞLEMCİ : İ5 13. NESİL İŞLEMCİ   BELLEK : 16 GB DDR 5    SSD : 256 M2SSD  GRAFİK : İNTEL IRIS GRAPHİC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14.1 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/56.jpg",
    "category": "Business"
  },
  {
    "id": 363,
    "name": "THİNKPAD RYZEN 5 PRO İŞLEMCİ 16 GB RAM 1TB M2SSD DOKUNMATİK",
    "brand": "Lenovo",
    "price": 15500,
    "specs": "THİNKPAD T14S DOKUNMATİK   İŞLEMCİ : RYZEN 5 PRO 4650U İŞLEMCİ    BELLEK : 16 GB DDR 4   SSD : 1 TB  M2SSD   GRAFİK : AMD RADEON GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14.1 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR        Fatih mahallesi Küçükçekmece Meydan        Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/57.jpg",
    "category": "Business"
  },
  {
    "id": 340,
    "name": "THİNKPAD İ5 8. NESİL 16 GB RAM 256 M2SSD DOKUNMATİK",
    "brand": "Lenovo",
    "price": 12500,
    "specs": "MODEL T480S DOKUNMATİK   İŞLEMCİ İ5 8. NESİL İŞLEMCİ   BELLEK : 16 GB DDR4    SSD : 256 M2SSD  GRAFİK : İNTEL HD GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14.1  İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR       PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/58.jpg",
    "category": "Business"
  },
  {
    "id": 676,
    "name": "THİNKPAD T14   İ5 10. NESİL 16 GB RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 12500,
    "specs": "THİNKPAD T14     İŞLEMCİ : İ5 10. NESİL   RAM : 16 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI  EKRAN : 14.1 İNÇ EKRAN BOYUTU  SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/59.jpg",
    "category": "Business"
  },
  {
    "id": 608,
    "name": "THİNKPAD İ7 10. NESİL 16 GB RAM 256 M2SSD",
    "brand": "Lenovo",
    "price": 17900,
    "specs": "THİNKPAD T14S   İŞLEMCİ : İ7 10. NESİL     RAM : 16 GB RAM   SSD : 256 M2SSD   GRAFİK : INTEL UHD GRAPHIC DAHİLİ 8 GB EKRAN KARTI   EKRAN : 14.1 İNÇ EKRAN BOYUTU  IŞIKLI KLAVYE   SİSTEM : WİNDOWS 11 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/60.jpg",
    "category": "Business"
  },
  {
    "id": 894,
    "name": "SURFACE LAPTOP İ5 7. NESİL 8 GB RAM 256 NVME DDKUNMATİK",
    "brand": "Microsoft",
    "price": 9500,
    "specs": "SURFACE PRO 5  DOKUNMATİK EKRAN  İŞLEMCİ : İ5 7. NESİL   RAM : 16 GB RAM   SSD :  256 NVME  GRAFİK : INTEL DAHİLİ 4 GB EKRAN KARTI  IŞIKLI KLAVYE  EKRAN : 13 İNÇ EKRAN BOYUTU      PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/61.jpg",
    "category": "Business"
  },
  {
    "id": 896,
    "name": "THİNKPAD İ7 8. NESİL 16 GB RAM 256 M2SSD  RX 550",
    "brand": "Lenovo",
    "price": 13500,
    "specs": "THİNKPAD E580   İŞLEMCİ : İ7 8. NESİL     RAM : 16 GB RAM   SSD : 256 M2SSD   GRAFİK : AMD RADEON RX 550 HARİCİ 2 GB EKRAN KARTI  EKRAN : 15.6 İNÇ EKRAN BOYUTU   SİSTEM : WİNDOWS 10 PRO  KULLANIMA HAZIR     PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR    Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/62.jpg",
    "category": "Business"
  },
  {
    "id": 880,
    "name": "HP ELİTBOOK İ5 6. NESİL 8 GB RAM 256 M2SSD",
    "brand": "HP",
    "price": 8250,
    "specs": "HP ELİTBOOK 840 G3  İŞLEMCİ : İ5 6. NESİL   RAM : 8 GB RAM   SSD :  256 M2SSD  GRAFİK : INTEL  DAHİLİ 4 GB EKRAN KARTI  ORJİNAL  ŞARJ ALETİ  BATARYASI % 100 SAĞLIKLI  14 İNÇ EKRAN BOYUTU    PHOTOSHOP + ILISTRATOR + COREL DRAW + AUTOCAD ve OFİS PROGRAMLARI YÜKLENİR    İSTANBUL İÇİ MOTO KURYE İLE GÖNDERİM YAPILIR      Fatih mahallesi Küçükçekmece Meydan                                     Küçükçekmece Marmaray durağına 100m                 Küçükçekmece Metrobüs durağına 450 m      Whatsapp üzerinden konum alabilirsiniz.",
    "image": "/images/63.jpg",
    "category": "Business"
  }
];

// LocalStorage'a kaydet
localStorage.setItem('products', JSON.stringify(products));

// Sayfayı yenile
window.location.reload();

console.log('✅ 63 ürün admin paneline yüklendi!');
