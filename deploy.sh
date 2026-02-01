# ===============================================
# PORTFOLIO DEPLOYMENT FIX
# Run these commands in GIT BASH (not PowerShell)
# ===============================================

echo "📦 Step 1: Add GitHub Actions workflow (created)"
git add .

echo "💾 Step 2: Commit the workflow"
git commit -m "Add GitHub Actions deployment workflow"

echo "🚀 Step 3: Push to GitHub"
git push origin main

echo ""
echo "✅ Done! Now follow these steps:"
echo ""
echo "1. Go to: https://github.com/Uzi-gpu/portfolio/settings/pages"
echo "2. Under 'Source', select: GitHub Actions"
echo "3. Save"
echo "4. Wait 2-3 minutes for deployment"
echo "5. Visit: https://uzi-gpu.github.io/portfolio/"
echo ""
echo "The GitHub Action will automatically build and deploy!"
