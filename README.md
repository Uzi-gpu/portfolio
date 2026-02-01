# 🚀 Portfolio Website - Uzair Mubasher

[![Deploy Status](https://github.com/Uzi-gpu/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Uzi-gpu/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://uzi-gpu.github.io/portfolio/)

> A modern, responsive portfolio website showcasing AI/ML engineering projects, skills, and expertise.

**🌐 Live Site:** [https://uzi-gpu.github.io/portfolio/](https://uzi-gpu.github.io/portfolio/)

---

## ✨ Features

- **🎨 Modern Design** - Sleek, professional UI with smooth animations
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎭 Interactive Effects** - Custom cursor, particle backgrounds, scroll animations
- **♿ Accessible** - Semantic HTML and ARIA labels
- **🔍 SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- **🌙 Premium Aesthetics** - Gradient meshes, glassmorphism, smooth transitions

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library

### 3D Graphics
- **Three.js** - 3D rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

### Deployment
- **GitHub Actions** - Automated CI/CD
- **GitHub Pages** - Hosting

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Uzi-gpu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Automatic Deployment

Every push to the `main` branch automatically triggers a deployment:

1. GitHub Actions builds the project
2. Deploys to GitHub Pages
3. Site goes live at `https://uzi-gpu.github.io/portfolio/`

### Manual Deployment

If needed, you can manually trigger deployment:

1. Go to **Actions** tab on GitHub
2. Select **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"**

---

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # SEO sitemap
│   └── .nojekyll               # Disable Jekyll processing
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact form
│   │   ├── CustomCursor.jsx    # Custom mouse cursor
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── ScrollProgress.jsx  # Scroll indicator
│   │   ├── ScrollToTop.jsx     # Scroll to top button
│   │   ├── Skills.jsx          # Skills section
│   │   └── Toast.jsx           # Toast notifications
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.js          # Tailwind CSS config
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

---

## 🎯 Key Sections

### Hero
- Animated introduction
- Eye-catching headline
- Call-to-action buttons

### About
- Professional background
- Education details
- Career objectives

### Skills
- Technical expertise
- Programming languages
- Frameworks and tools
- Organized by category

### Projects
- Showcase of AI/ML projects
- Deep Learning, Computer Vision, NLP
- Live demos and GitHub links
- Project descriptions and tech stacks

### Contact
- Contact form with validation
- Social media links
- Email integration
- Professional networking

---

## 🎨 Customization

### Update Content

Edit the following files to customize content:

- **About Section:** `src/components/About.jsx`
- **Projects:** `src/components/Projects.jsx`
- **Skills:** `src/components/Skills.jsx`
- **Contact Info:** `src/components/Contact.jsx`

### Change Colors

Modify the Tailwind config:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      }
    }
  }
}
```

### Update SEO Metadata

Edit meta tags in `index.html`:
```html
<!-- Update these -->
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:image" content="your-image-url" />
```

---

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+
- 🎯 **First Contentful Paint:** < 1s
- 📦 **Bundle Size:** ~320KB (minified)
- 🚀 **Build Time:** ~4s

---

## 🔧 Configuration

### GitHub Pages Base Path

The site is configured for GitHub Pages with a base path:

```javascript
// vite.config.js
export default defineConfig({
  base: '/portfolio/',  // Your repo name
})
```

**Note:** If deploying to a custom domain, change `base` to `'/'`

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🐛 Troubleshooting

### Assets not loading on GitHub Pages
- Ensure `base: '/portfolio/'` is set in `vite.config.js`
- Check that all asset paths are relative

### Build fails
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### Development server won't start
- Port 3000 might be in use, change port in `vite.config.js`
- Check for syntax errors in JavaScript files

---

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 👤 Author

**Uzair Mubasher**
- 🎓 BS Artificial Intelligence Graduate
- 💼 AI/ML Engineer
- 🔗 LinkedIn: [linkedin.com/in/uzair-mubasher-208ba5164](https://www.linkedin.com/in/uzair-mubasher-208ba5164)
- 📧 Email: uzairmubasher5@gmail.com
- 🐙 GitHub: [@Uzi-gpu](https://github.com/Uzi-gpu)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite** - For the blazing-fast build tool
- **Tailwind CSS** - For utility-first styling
- **Framer Motion** - For smooth animations
- **Three.js** - For 3D graphics capabilities

---

## 📈 SEO Features

✅ **Comprehensive Meta Tags**
- Title, description, keywords, author
- Canonical URLs

✅ **Open Graph Tags**
- Facebook and social media sharing
- Custom preview images

✅ **Twitter Card Meta**
- Large image cards
- Optimized for Twitter sharing

✅ **Structured Data (JSON-LD)**
- Person schema
- Professional information

✅ **Sitemap & Robots.txt**
- XML sitemap for search engines
- Robots.txt for crawling instructions

---

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Integrate CMS for easy content updates
- [ ] Add dark/light mode toggle
- [ ] Implement analytics dashboard
- [ ] Add project case studies
- [ ] Multi-language support

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Uzair Mubasher](https://github.com/Uzi-gpu)

[Live Demo](https://uzi-gpu.github.io/portfolio/) • [Report Bug](https://github.com/Uzi-gpu/portfolio/issues) • [Request Feature](https://github.com/Uzi-gpu/portfolio/issues)

</div>
