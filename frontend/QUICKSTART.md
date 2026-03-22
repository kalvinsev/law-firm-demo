# 🚀 GET THIS LIVE IN 5 MINUTES

Your landing page is ready to deploy. Here's the fastest path from zero to live site.

## Option 1: Vercel (Fastest — 2 minutes)

1. **Push to GitHub:**
   ```bash
   cd axonai-landing
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create axonai-landing --public --source=. --remote=origin --push
   ```
   (If you don't have `gh` CLI: create a repo on github.com and push manually)

2. **Deploy to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `axonai-landing` repo
   - Click Deploy (Vercel auto-detects everything)
   - **Done.** Your site is live in 90 seconds.

3. **Add your domain** (optional):
   - Vercel dashboard → Domains → Add your domain
   - Update DNS with the CNAME they give you
   - Wait 5-60 minutes for SSL

## Option 2: Netlify (Also fast — 3 minutes)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [app.netlify.com/start](https://app.netlify.com/start)
   - Connect to GitHub
   - Select your repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click Deploy

3. **Your site is live** at `random-name.netlify.app`

## Option 3: Railway (Good for full-stack later)

```bash
cd axonai-landing
npm i -g @railway/cli
railway login
railway init
railway up
```

Your site will be live at `yourproject.up.railway.app`

## Before You Deploy — Update These 3 Things:

Open `src/landing-page.jsx` and search for:

1. **Email** (line ~480): Change `hello@axonai.co` to your email
2. **Calendly** (line ~485): Change the Calendly URL to yours
3. **Company name** (optional): Find/replace "AxonAI" with your business name

That's it. Everything else works out of the box.

## Test Locally First

```bash
cd axonai-landing
npm install
npm run dev
```

Open `http://localhost:3000` — if it looks good, deploy.

## What You're Getting

- Fully responsive landing page
- Dark luxury aesthetic (no generic AI gradients)
- Optimized for law firms, med spas, real estate in LA
- SEO-ready with proper meta tags
- Production-grade React + Tailwind stack
- Zero configuration needed

## Domain Setup (After Deployment)

1. Buy domain at [namecheap.com](https://namecheap.com) or [porkbun.com](https://porkbun.com)
2. In your domain's DNS settings, add a CNAME:
   - Name: `@` or `www`
   - Value: (your Vercel/Netlify URL from deployment)
3. In Vercel/Netlify, add the domain under Settings → Domains
4. Wait 30-60 minutes for DNS propagation

## Need Help?

Check the full README.md for detailed customization instructions.

---

**One more thing:** The site is designed to convert. The $500 pilot CTA, the industry-specific pain points, the "60-second demo" messaging — it's all based on your actual pitch. Walk into a law firm, show them this site on your phone, and they'll take you seriously.

Go deploy it. Right now.
