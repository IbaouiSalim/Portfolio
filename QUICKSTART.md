# 🚀 Quick Start Guide

Get your portfolio website up and running in minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Edit Your Content
Update `src/data/portfolio.js` with your:
- Projects
- Skills
- Education
- Social links

Save the file - changes appear instantly!

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

Creates optimized `dist/` folder (~150KB gzipped).

### Preview Production Build
```bash
npm run preview
```

### Deploy (Choose One)

**Netlify** (Recommended - 1 click):
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Vercel**:
```bash
npm run build
vercel --prod
```

**GitHub Pages**:
1. Push to GitHub
2. Go to repo Settings → Pages
3. Set build folder: `dist`

**Or use automation scripts**:
- Windows: `deploy.bat`
- Linux/Mac: `bash deploy.sh`

---

## ✏️ Customization Checklist

- [ ] Update `PROJECTS` in `src/data/portfolio.js`
- [ ] Update `SKILLS` array
- [ ] Update `EDUCATION` history
- [ ] Update `SOCIAL_LINKS` with your accounts
- [ ] Update `LANGUAGES` proficiency levels
- [ ] Change email in footer
- [ ] Customize colors in `tailwind.config.js`
- [ ] Update `index.html` meta tags

---

## 🎯 File Locations

| What | Where |
|------|-------|
| Portfolio Content | `src/data/portfolio.js` |
| Styling | `src/index.css` / `tailwind.config.js` |
| Components | `src/components/` |
| Sections | `src/sections/` |
| Meta Tags | `index.html` |
| Social Links | `src/data/portfolio.js` |

---

## 🔍 Troubleshooting

**Port 5173 already in use?**
```bash
# Change port in vite.config.js
# Or kill the process using that port
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**3D background not showing?**
- Check browser console (F12)
- Ensure internet connection (loads Three.js from CDN)
- Try disabling browser extensions

**Styling issues?**
```bash
npm run build
# Clear browser cache (Ctrl+Shift+Del)
```

---

## 📊 What's Included

✅ Responsive design (mobile-friendly)
✅ Dark theme with gradient accents
✅ 3D animated background
✅ Smooth scroll navigation
✅ Project showcase
✅ Skills matrix
✅ Education timeline
✅ Contact section
✅ SEO optimized
✅ Production-ready build

---

## 🌍 Deployment Options

| Platform | Free | Speed | HTTPS | Best For |
|----------|------|-------|-------|----------|
| Netlify | ✅ | Fast | ✅ | Beginners |
| Vercel | ✅ | Very Fast | ✅ | Developers |
| GitHub Pages | ✅ | Medium | ✅ | GitHub users |
| Custom VPS | ❌ | Varies | ⚠️ | Full control |

**Recommended**: Netlify (easiest setup)

---

## 📱 Testing on Mobile

### Chrome DevTools
1. Press `F12`
2. Click device icon (top-left)
3. Select device from dropdown

### Real Device
- Use `npm run dev`
- Connect to local IP: `http://192.168.x.x:5173`

---

## 🎨 Color Customization

All colors use Tailwind CSS classes. Main theme:
- Primary: `indigo-500`
- Background: `#070708`
- Text: `white` / `slate-300`

Edit `tailwind.config.js` to change colors globally.

---

## 📈 Performance Tips

✅ Images lazy-loaded
✅ 3D background scales on mobile
✅ Production builds minified
✅ CSS purged (only used styles included)
✅ JavaScript code-split

---

## 🔐 Security

- No sensitive data in code
- Use environment variables for API keys
- Enable HTTPS on deployment
- Keep dependencies updated: `npm audit fix`

---

## 🆘 Need Help?

1. Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment options
2. Check [README.md](README.md) for full documentation
3. Review [Vite docs](https://vitejs.dev/) for build issues
4. Check [React docs](https://react.dev/) for component questions
5. Visit [Tailwind docs](https://tailwindcss.com/) for styling help

---

## ⭐ Next Steps

1. **Customize content** → Edit `src/data/portfolio.js`
2. **Test locally** → Run `npm run dev`
3. **Build** → Run `npm run build`
4. **Deploy** → Choose a platform and deploy!

---

**You're all set!** 🎉

Deploy your portfolio and start getting noticed! 🚀
