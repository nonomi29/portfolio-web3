# Deploy Portfolio ke GitHub Pages

## Struktur file
```
portfolio-web3/
├── index.html
├── styles.css
└── script.js
```

## Langkah deploy

### 1. Buat repository baru di GitHub
- Buka https://github.com/new
- Nama repo: `nonomi29` atau `portfolio-web3`
- Jangan centang "Initialize this repository with a README"
- Klik **Create repository**

### 2. Upload file dari PC ini ke GitHub

```bash
cd ~/labs/portfolio-web3
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/nonomi29/portfolio-web3.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Masuk ke **Settings → Pages**
3. Di bagian "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Klik **Save**

### 4. Akses website
Setelah 1-2 menit, buka:
```
https://nonomi29.github.io/portfolio-web3
```

## Tips edit konten
- Buka `index.html`
- Ganti teks di section `<section id="about">`, `<section id="projects">`, dan `<section id="skills">`
- Tambahkan foto profil (opsional): taruh file `profile.jpg` di folder, lalu tambahkan tag `<img src="profile.jpg" alt="Dewi" />`

## Jika ingin domain custom
- Di repository, buat file `CNAME` tanpa extension
- Isi dengan domain Anda, contoh:
  ```
  dewi-puspitasari.xyz
  ```
- Tambahkan DNS A record ke GitHub Pages IP di provider domain.
