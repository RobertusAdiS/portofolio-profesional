# PPG Professional Portfolio — Premium Edition

Versi premium visual dari portfolio PPG berbasis React + TypeScript + Vite + Tailwind CSS + Framer Motion. Desain diarahkan ke portfolio profesional modern: editorial, akademik, elegan, dengan aksen teknologi yang halus.

## Visual upgrade
- Hero editorial dengan typography besar dan visual card berlapis
- Glassmorphism selektif pada navigasi
- Grid/noise-inspired background yang ringan tanpa asset berat
- Accent emerald + warm gold untuk identitas akademik modern
- Premium card hover, filter transition, scroll reveal, dan micro-interactions
- Marquee identitas kompetensi
- Responsive mobile-first dan reduced-motion support

## Run
```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
npm run preview
```

## Customization
Edit `src/config/profile.ts` untuk nama, email, dan social links. Edit `src/data/` untuk project, journey, skills, dan evidence.

Placeholder tetap digunakan untuk data pribadi/evidence yang belum tersedia. Jangan mengganti placeholder dengan URL atau kredensial fiktif.

## Deployment
Project menggunakan BrowserRouter dan `vercel.json` untuk SPA rewrite. Import repository ke Vercel, framework preset Vite, lalu deploy.

## Catatan verifikasi
Kode telah diperbarui secara statis. `npm run build` perlu dijalankan setelah `npm install` pada mesin lokal/CI karena instalasi dependency di environment pembuatan arsip sebelumnya mengalami timeout.
