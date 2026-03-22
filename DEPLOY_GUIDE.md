# 🚀 Preschool Worksheets Generator 部署指南

## 📦 项目已准备就绪！

- **项目位置**: `/Users/mac/.openclaw/workspace/coder/projects/preschool-worksheets`
- **构建输出**: `out/` 目录（静态文件）
- **技术栈**: Next.js 14 + Tailwind CSS

---

## 🌐 方案一：Cloudflare Pages + GitHub（推荐）

### 第一步：推送代码到 GitHub

```bash
# 打开终端，运行以下命令
cd /Users/mac/.openclaw/workspace/coder/projects/preschool-worksheets

# 创建 GitHub 仓库并推送
gh repo create preschool-worksheets --public --source=. --push --description "AI-powered preschool worksheet generator"

# 如果没有 gh CLI，手动操作：
# 1. 访问 https://github.com/new
# 2. 创建仓库：preschool-worksheets
# 3. 运行：
git remote add origin https://github.com/cosmoseeker/preschool-worksheets.git
git push -u origin master
```

### 第二步：连接 Cloudflare Pages

1. 访问：**https://dash.cloudflare.com/3bb1dfa17ad0f105e26f31a860d8dffa/pages**
2. 点击 **"Create a project"**
3. 选择 **"Connect to Git"**
4. 选择 **GitHub** → 授权 Cloudflare
5. 选择仓库：**preschool-worksheets**
6. 配置构建设置：
   - **Production branch**: `master`
   - **Framework preset**: `Next.js (Static Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
7. 点击 **"Save and Deploy"**

### 第三步：等待部署完成

- 部署时间：约 1-2 分钟
- 部署完成后会获得一个 `.pages.dev` 域名
- 例如：`https://preschool-worksheets.pages.dev`

---

## 🌐 方案二：直接上传（更快）

```bash
# 在项目目录运行
cd /Users/mac/.openclaw/workspace/coder/projects/preschool-worksheets

# 使用 wrangler 直接部署（需要先登录）
wrangler login
wrangler pages deploy out --project-name=preschool-worksheets
```

---

## 🎯 部署后的步骤

### 1. 添加自定义域名（可选）

在 Cloudflare Pages 项目设置中：
- 点击 "Custom domains"
- 添加域名：如 `preschoolworksheets.app`
- Cloudflare 会自动配置 DNS

### 2. 提交到 Google Search Console

1. 访问：https://search.google.com/search-console
2. 添加资源：输入你的 `.pages.dev` 域名
3. 验证方式：选择 "HTML 标签"
4. 在 Cloudflare Pages 的 "Page Functions" 中添加验证标签

### 3. 发外链

使用 `content/templates/preschool-mvp-content.md` 中的文案：
- Product Hunt
- Hacker News
- Dev.to
- Reddit

---

## 📊 项目信息

| 项目 | 信息 |
|------|------|
| 名称 | Preschool Worksheets Generator |
| 描述 | AI-powered preschool worksheet generator for kids 3-6 |
| 功能 | 字母练习、数字练习、形状练习、PDF下载 |
| 技术栈 | Next.js 14, Tailwind CSS, html2canvas, jsPDF |
| 构建 | `npm run build` → `out/` |
| 本地预览 | `npm run dev` → http://localhost:3000 |

---

## 🔗 重要链接

- **GitHub**: https://github.com/cosmoseeker/preschool-worksheets
- **Cloudflare Dashboard**: https://dash.cloudflare.com/3bb1dfa17ad0f105e26f31a860d8dffa/pages
- **Google Search Console**: https://search.google.com/search-console

---

## ✅ 快速检查清单

- [ ] 代码已推送到 GitHub
- [ ] Cloudflare Pages 项目已创建
- [ ] 部署成功，网站可访问
- [ ] 添加到 Google Search Console
- [ ] 发外链（Product Hunt, HN, Dev.to）
- [ ] 添加 Google Analytics（可选）

---

**🎉 完成后你的产品就正式上线了！**
