const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9876;

// Simple static file server
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
      res.end(content);
    }
  });
});

(async () => {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const warnings = [];

  // Listen for console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    } else if (msg.type() === 'warning') {
      warnings.push(msg.text());
    }
  });

  // Listen for page errors
  page.on('pageerror', err => {
    errors.push(err.message);
  });

  try {
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle', timeout: 30000 });

    // Wait for animations and content to load
    await page.waitForTimeout(3000);

    console.log('Page loaded successfully!');
    console.log('Title:', await page.title());

    // Check if key elements exist
    const heroText = await page.$('text=Uzair Mubasher');
    const projectsSection = await page.$('#projects');
    const skillsSection = await page.$('#skills');

    console.log('\nElement checks:');
    console.log('- Hero section with name:', heroText ? '✅' : '❌');
    console.log('- Projects section:', projectsSection ? '✅' : '❌');
    console.log('- Skills section:', skillsSection ? '✅' : '❌');

    if (errors.length > 0) {
      console.log('\n❌ Console Errors:');
      errors.forEach(err => console.log('  -', err));
    } else {
      console.log('\n✅ No console errors found!');
    }

    if (warnings.length > 0) {
      console.log('\n⚠️ Console Warnings:');
      warnings.forEach(warn => console.log('  -', warn));
    }

  } catch (error) {
    console.error('❌ Error loading page:', error.message);
  }

  await browser.close();
  server.close();
})();
