# Fix Portfolio Deployment Issues
# Run this script in PowerShell to resolve merge conflicts and deploy

Write-Host "🔧 Fixing Portfolio Deployment..." -ForegroundColor Cyan

# Step 1: Abort the merge
Write-Host "`n1. Aborting merge conflict..." -ForegroundColor Yellow
git merge --abort

# Step 2: Clear gh-pages cache (fixes ENAMETOOLONG error)
Write-Host "`n2. Clearing gh-pages cache..." -ForegroundColor Yellow
if (Test-Path "node_modules\.cache\gh-pages") {
    Remove-Item -Recurse -Force "node_modules\.cache\gh-pages"
    Write-Host "   ✓ Cache cleared" -ForegroundColor Green
} else {
    Write-Host "   ℹ No cache to clear" -ForegroundColor Gray
}

# Step 3: Deploy with updated remote URL
Write-Host "`n3. Updating remote URL..." -ForegroundColor Yellow
git remote set-url origin https://github.com/Uzi-gpu/portfolio.git
Write-Host "   ✓ Remote updated to use correct capitalization" -ForegroundColor Green

# Step 4: Deploy to GitHub Pages
Write-Host "`n4. Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

Write-Host "`n✅ Done!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com/Uzi-gpu/portfolio/settings/pages" -ForegroundColor White
Write-Host "2. Set source to: gh-pages branch / root" -ForegroundColor White
Write-Host "3. Save and wait 2-5 minutes" -ForegroundColor White
Write-Host "4. Your site will be live at: https://uzi-gpu.github.io/portfolio/" -ForegroundColor White
