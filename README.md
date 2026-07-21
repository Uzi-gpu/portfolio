# 🚀 Uzair Bin Mubasher - Full-Stack Developer Portfolio

[![Deploy Status](https://github.com/Uzi-gpu/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Uzi-gpu/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://uzi-gpu.github.io/portfolio/)

> A modern, highly-polished portfolio showcasing my expertise in Full-Stack Web Development, AI, and Machine Learning. 

**🌐 Live Site:** [https://uzi-gpu.github.io/portfolio/](https://uzi-gpu.github.io/portfolio/)

---

## ✨ Features

- **🎨 Modern Aesthetic Design** - A sleek, professional UI with carefully crafted contrast, typography, and clean layouts.
- **🌗 Dark Mode Toggle** - Fully integrated light and dark modes that dynamically update UI themes and image filters instantly.
- **📱 Fully Responsive** - Pixel-perfect layouts optimized for desktop, tablet, and mobile viewing.
- **⚡ Fast Performance** - Built with Vite and React for lightning-fast load times.
- **🎭 Smooth Animations** - Powered by Framer Motion to provide engaging scroll-reveal animations and micro-interactions.
- **📧 Serverless Email Integration** - Direct contact form routing using Web3Forms API.
- **🔍 SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data integration.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool and lightning-fast dev server
- **Tailwind CSS** - Utility-first styling with custom CSS variable mapping
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful SVG icons

### Infrastructure & Deployment
- **Web3Forms** - Serverless email submission API
- **GitHub Actions** - Automated CI/CD pipelines
- **GitHub Pages** - Hosting

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- Git

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Uzi-gpu/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Contact Form (Web3Forms)**
   - Open `src/components/Contact.jsx`
   - Insert your Web3Forms Access Key on line 21 to enable email routing.

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── ...                     # Static assets (robots.txt, sitemap)
├── src/
│   ├── assets/                 # Local images (e.g., profile.jpg)
│   ├── components/
│   │   ├── About.jsx           # Background and education details
│   │   ├── Contact.jsx         # Web3Forms integrated contact form
│   │   ├── Footer.jsx          # Page footer
│   │   ├── Hero.jsx            # Landing section with dynamic portrait
│   │   ├── Navbar.jsx          # Responsive navigation & theme toggler
│   │   ├── Projects.jsx        # Project grid for Web Dev & AI work
│   │   ├── ScrollToTop.jsx     # Scroll utility
│   │   └── Skills.jsx          # Categorized technical skills map
│   ├── App.jsx                 # Main application structure
│   ├── main.jsx                # React entry point
│   └── index.css               # Global theme variables & Tailwind injection
├── package.json                # Dependencies
├── tailwind.config.js          # Extended Tailwind CSS configuration
├── vite.config.js              # Vite bundler configuration
└── README.md                   # This documentation
```

---

## 🎯 Key Sections

### 1. Hero
A captivating landing view that introduces who I am, featuring a fully animated layout and a theme-responsive portrait.

### 2. About
A deep dive into my background as a BSAI graduate with a passion for building intelligent systems.

### 3. Skills
Categorized layout mapping out my technical expertise across Frontend, Backend, Machine Learning, and Development Tools.

### 4. Projects
A comprehensive showcase combining my Web Development projects (e-commerce, React apps, dynamic dashboards) alongside my advanced AI and Machine Learning repositories. Complete with direct GitHub and Live Demo links.

### 5. Contact
A beautifully styled, fully functional contact form that sends messages straight to my inbox via Web3Forms, alongside my professional networking links.

---

## 🚀 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.
Every push to the `main` branch automatically triggers a deployment:
1. GitHub Actions builds the project
2. Deploys to GitHub Pages
3. Site goes live automatically at `https://uzi-gpu.github.io/portfolio/`

*(Base path configuration is handled inside `vite.config.js` to match the repository name).*

---

## 👤 Author

**Uzair Bin Mubasher**
- 🎓 BS Artificial Intelligence Graduate
- 💼 Full-Stack AI Engineer
- 🔗 LinkedIn: [linkedin.com/in/uzair-bin-mubasher](https://linkedin.com/in/uzair-bin-mubasher-208ba5164)
- 📧 Email: uzairmubasher5@gmail.com
- 🐙 GitHub: [@Uzi-gpu](https://github.com/Uzi-gpu)

---

<div align="center">

**⭐ Star this repo if you found the design helpful!**

Made with ❤️ by [Uzair Bin Mubasher](https://github.com/Uzi-gpu)

[Live Demo](https://uzi-gpu.github.io/portfolio/) • [Report Bug](https://github.com/Uzi-gpu/portfolio/issues)

</div>
