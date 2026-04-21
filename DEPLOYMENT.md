# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## Prerequisites for All Methods

```bash
npm run build  # Creates the 'dist' folder
```

## 🚀 Recommended: Netlify (Free)

### Option A: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Option B: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy happens automatically on every push!

**Benefits:**
- ✅ Free HTTPS
- ✅ Automatic deploys
- ✅ Free domain
- ✅ Analytics included

---

## 🟦 Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run build
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com)

---

## 📘 GitHub Pages

### Option A: User/Organization Site

1. Create a GitHub repo named `yourusername.github.io`
2. Push code to main branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. GitHub automatically builds and deploys to `https://yourusername.github.io`

### Option B: Project Site

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/portfolio/',  // Change to your repo name
     // ... rest
   }
   ```

2. Deploy:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy"
   git push
   ```

---

## 🔗 Custom Domain (All Platforms)

1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Update DNS records to point to your hosting:

**Netlify:**
- DNS: `75.2.60.5`

**Vercel:**
- Add as external domain in settings

**GitHub Pages:**
- CNAME file with domain name

---

## 🖥️ Self-Hosted VPS

### Using Node.js

```bash
# SSH into server
ssh user@your-server.com

# Clone and setup
git clone <your-repo>
cd portfolio_website
npm install
npm run build

# Install PM2 to keep running
npm install -g pm2
pm2 serve dist 3000 --spa --name portfolio
pm2 startup
pm2 save

# Access at http://your-server.com:3000
```

### Using Python

```bash
npm run build
python -m http.server 8000 --directory dist
# Access at http://your-server.com:8000
```

### Using Nginx

```bash
# Install Nginx
sudo apt install nginx

# Copy dist to web root
sudo cp -r dist/* /var/www/html/

# Configure Nginx
sudo nano /etc/nginx/sites-enabled/default
```

Add to Nginx config:

```nginx
server {
    listen 80 default_server;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio:latest .
docker tag portfolio:latest yourusername/portfolio:latest
docker push yourusername/portfolio:latest
```

### Run Locally

```bash
docker run -p 8000:8000 portfolio:latest
```

### Deploy to Cloud

**AWS Fargate:**
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

**Azure Container Instances:**
```bash
az acr login --name yourregistry
docker tag portfolio:latest yourregistry.azurecr.io/portfolio:latest
docker push yourregistry.azurecr.io/portfolio:latest
az container create --resource-group mygroup --name portfolio --image yourregistry.azurecr.io/portfolio:latest
```

---

## 📊 Deployment Comparison

| Platform | Cost | Setup Time | HTTPS | Auto-Deploy |
|----------|------|-----------|-------|-------------|
| Netlify | Free | < 5 min | ✅ | ✅ |
| Vercel | Free | < 5 min | ✅ | ✅ |
| GitHub Pages | Free | < 10 min | ✅ | ✅ |
| AWS | $5-20/mo | 30 min | ✅ | ⚠️ |
| Heroku | Free-$7/mo | 10 min | ✅ | ✅ |
| DigitalOcean | $5+/mo | 20 min | ✅ | ⚠️ |

---

## ✅ Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All links work correctly
- [ ] Social media links point to correct URLs
- [ ] Email link works (mailto:)
- [ ] 3D background loads (check browser console)
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] SSL/HTTPS enabled
- [ ] Analytics set up (optional)

---

## 🔄 Continuous Integration/Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

---

## 📈 Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from [google.com/analytics](https://analytics.google.com)
2. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance

- Netlify/Vercel analytics dashboards
- Google PageSpeed Insights
- Lighthouse in browser DevTools

---

## 🆘 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images not loading:**
- Check relative paths in dist/
- Verify CDN links are public

**3D background issues:**
- Check browser console for Three.js errors
- Verify CDN is accessible

---

For questions, refer to platform-specific docs or update README with your learnings!
