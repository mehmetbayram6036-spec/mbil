# Bilgisayar Satış Sitesi

Bu proje Next.js 15 ile geliştirilmiş bir bilgisayar satış web sitesidir.

## Özellikler

- Ürün listesi ve detay sayfaları
- Admin paneli (kullanıcı adı: admin, şifre: 123Tema456)
- SEO optimizasyonu
- Responsive tasarım
- Ürün arama ve filtreleme

## Teknolojiler

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Vercel Deployment

Bu proje Vercel'de deploy edilmek üzere hazırlanmıştır. Vercel otomatik olarak:

- `npm install` komutunu çalıştırır
- `npm run build` komutunu çalıştırır
- Next.js uygulamasını deploy eder

## Proje Yapısı

```
src/
├── app/
│   ├── page.tsx          # Ana sayfa
│   ├── layout.tsx        # Ana layout
│   ├── admin/
│   │   └── page.tsx      # Admin paneli
│   └── urun/
│       └── [id]/
│           └── page.tsx  # Ürün detay sayfası
public/
├── images/               # Ürün resimleri
├── sitemap.xml          # SEO sitemap
└── robots.txt           # SEO robots
```

## Admin Panel

- URL: `/admin`
- Kullanıcı adı: `admin`
- Şifre: `123Tema456`

## SEO

Proje aşağıdaki SEO optimizasyonlarını içerir:

- Meta tags
- Open Graph
- Twitter Cards
- Structured Data (Schema.org)
- Sitemap.xml
- Robots.txt
- Canonical URLs
