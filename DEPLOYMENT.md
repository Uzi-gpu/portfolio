# Portfolio Website Deployment Guide

## 🚀 Deploy to GitHub Pages

### Step 1: Install Dependencies
```bash
npm install
```

This will install `gh-pages` package added to devDependencies.

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: "AI/ML Engineer Portfolio - Showcasing projects in Deep Learning, Computer Vision & NLP"
4. **Public** repository
5. **DO NOT** initialize with README
6. Click "Create repository"

### Step 3: Push Code to GitHub
```bash
cd "c:\Users\tinyy\Downloads\portfolio\portfolio"
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/uzi-gpu/portfolio.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
- Build your production site
- Create a `gh-pages` branch
- Deploy to GitHub Pages automatically

### Step 5: Enable GitHub Pages
1. Go to your repository: https://github.com/uzi-gpu/portfolio
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** / **root**
5. Click **Save**

### Step 6: Access Your Site
Your portfolio will be live at:
```
https://uzi-gpu.github.io/portfolio/
```

⏱️ **Note**: First deployment may take 2-5 minutes to go live.

---

## 📝 Future Updates

To update your site after making changes:

```bash
# Make your changes
# Then run:
npm run deploy
```

The `deploy` script automatically builds and pushes to gh-pages branch.

---

## ✅ What Was Configured

1. **Vite Config** - Added base path `/portfolio/` for GitHub Pages
2. **Package.json** - Added deploy scripts and gh-pages dependency
3. **robots.txt** - Search engine crawling instructions
4. **sitemap.xml** - SEO sitemap with all sections
5. **.nojekyll** - Disables Jekyll processing

---

## 🎯 SEO Status

✅ **Already Excellent!**
- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD)
- Semantic HTML
- No MiniMax branding found

---

## 🔧 Troubleshooting

**Issue**: 404 errors on GitHub Pages
- **Fix**: Make sure `base: '/portfolio/'` is in vite.config.js

**Issue**: Assets not loading
- **Fix**: Ensure all asset paths are relative, not absolute

**Issue**: Deploy command fails
- **Fix**: Run `npm install` first to install gh-pages

---

## 📊 Verify Deployment

After deployment, check:
1. ✅ Site loads at https://uzi-gpu.github.io/portfolio/
2. ✅ All sections work (Hero, About, Skills, Projects, Contact)
3. ✅ Images and assets load correctly
4. ✅ Mobile responsive
5. ✅ Social sharing preview works

Run Lighthouse audit for performance check!

---

**🎉 Your portfolio is ready for deployment!**
