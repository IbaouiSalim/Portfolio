# Mohamed Salim Ibaoui - Portfolio Website

A modern, production-ready portfolio website built with React, Vite, and Tailwind CSS. Features 3D background animations, smooth scrolling navigation, and responsive design.

## 🚀 Features

- **3D Background**: Interactive Three.js particle effects and geometry animations
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Smooth Navigation**: Sticky header with active section detection
- **Performance Optimized**: Code splitting, lazy loading, and efficient rendering
- **SEO Ready**: Meta tags, structured data, and Open Graph support
- **Production Build**: Minified and optimized for deployment
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 📋 Prerequisites

- Node.js 16+ and npm/yarn installed
- Git for version control

## 🛠️ Installation & Development

### 1. Clone and Install Dependencies

```bash
cd portfolio_website
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### 4. Preview Production Build Locally

```bash
npm run preview
```

Or use Python:

```bash
npm run serve
```

## 📁 Project Structure

```
portfolio_website/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ThreeBackground.jsx
│   ├── sections/            # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsEducationSection.jsx
│   │   └── FooterSection.jsx
│   ├── data/
│   │   └── portfolio.js     # Portfolio content
│   ├── App.jsx              # Main component
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind & custom styles
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS config
└── postcss.config.js        # PostCSS config
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolio.js`:

- **PROJECTS**: Add/modify your projects
- **SKILLS**: Update skill categories
- **EDUCATION**: Modify education history
- **SOCIAL_LINKS**: Update social media links

### Modify Styling

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Animations**: Modify `src/index.css` for custom animations
- **Layout**: Adjust component classes in respective files

### Change Social Links

Update `src/data/portfolio.js` with your actual links:

```javascript
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
  twitter: "https://twitter.com/yourhandle"
};
```

## 🌐 Deployment Options

### 1. **Netlify** (Recommended - Free)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo to Netlify for automatic deployments.

### 2. **Vercel** (Free)

```bash
npm install -g vercel
npm run build
vercel --prod
```

### 3. **GitHub Pages**

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/',  // or '/repository-name/' if not a user site
     // ... rest of config
   }
   ```

2. Deploy:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy"
   git push
   ```

### 4. **Self-Hosted (VPS/Shared Hosting)**

```bash
npm run build
# Transfer 'dist' folder contents to your server
```

Serve with:
- **Apache**: Place `dist` files in `public_html`
- **Nginx**: Configure to serve `dist` folder
- **Python**: `python -m http.server 8000 --directory dist`

### 5. **Docker Deployment**

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM python:3.11-slim
WORKDIR /app
COPY --from=build /app/dist .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 8000:8000 portfolio
```

## 🔧 Environment Variables

Create `.env` file for environment-specific configurations:

```env
VITE_APP_TITLE=Your Portfolio Title
VITE_GITHUB_URL=https://github.com/yourusername
```

Access in components:

```javascript
const title = import.meta.env.VITE_APP_TITLE;
```

## 📊 Performance Optimization

- ✅ Minified production builds
- ✅ Code splitting enabled
- ✅ Lazy loading for heavy components
- ✅ Optimized Three.js loading
- ✅ CSS purging with Tailwind
- ✅ Image optimization ready
- ✅ Console.log removal in production

## 🐛 Troubleshooting

### Three.js Not Loading

- Check internet connection (CDN dependency)
- Verify browser console for errors
- Ensure JavaScript is enabled

### Styles Not Applying

```bash
npm run build
# Clear dist folder and rebuild
```

### Performance Issues

- Reduce particle count in `ThreeBackground.jsx`
- Disable 3D background on mobile in `HeroSection.jsx`
- Check DevTools Performance tab

## 📝 SEO Checklist

- ✅ Meta description
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Structured data ready
- ✅ Mobile responsive
- ✅ Fast loading time

## 🔒 Security

- No sensitive data in repository
- HTTPS recommended for production
- Content Security Policy headers recommended
- Regular dependency updates with `npm audit`

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This portfolio template is free to use and modify.

## 🤝 Support

For issues or questions, check the Vite and React documentation or open an issue.

---

**Last Updated**: April 2025
