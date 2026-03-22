#!/bin/bash
# 🚀 Preschool Worksheets 部署脚本
# 使用方法: ./deploy.sh

set -e

PROJECT_DIR="/Users/mac/.openclaw/workspace/coder/projects/preschool-worksheets"
REPO_NAME="preschool-worksheets"
GITHUB_USER="cosmoseeker"

echo "🦞 Preschool Worksheets 部署脚本"
echo "================================"
echo ""

cd $PROJECT_DIR

# 步骤 1: 检查 GitHub 认证
echo "📦 步骤 1/4: 检查 GitHub 认证..."
if ! gh auth status &>/dev/null; then
    echo "⚠️  需要登录 GitHub"
    echo "运行: gh auth login"
    echo "或者创建 Personal Access Token: https://github.com/settings/tokens/new"
    echo ""
    echo "然后运行: export GH_TOKEN=your_token_here"
    exit 1
fi
echo "✅ GitHub 已认证"

# 步骤 2: 创建/更新 GitHub 仓库
echo ""
echo "📦 步骤 2/4: 推送到 GitHub..."
if ! git remote | grep -q "origin"; then
    gh repo create $REPO_NAME --public --source=. --remote=origin --description "AI-powered preschool worksheet generator for kids 3-6"
fi
git push -u origin master --force
echo "✅ 代码已推送到: https://github.com/$GITHUB_USER/$REPO_NAME"

# 步骤 3: 检查 Cloudflare 认证
echo ""
echo "📦 步骤 3/4: 检查 Cloudflare 认证..."
if ! wrangler whoami &>/dev/null; then
    echo "⚠️  需要登录 Cloudflare"
    echo "运行: wrangler login"
    exit 1
fi
echo "✅ Cloudflare 已认证"

# 步骤 4: 部署到 Cloudflare Pages
echo ""
echo "📦 步骤 4/4: 部署到 Cloudflare Pages..."
wrangler pages project create $REPO_NAME 2>/dev/null || true
wrangler pages deploy out --project-name=$REPO_NAME --branch=main

echo ""
echo "🎉 部署完成！"
echo ""
echo "🔗 链接："
echo "  - GitHub: https://github.com/$GITHUB_USER/$REPO_NAME"
echo "  - Cloudflare: https://$REPO_NAME.pages.dev"
