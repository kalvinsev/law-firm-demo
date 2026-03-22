# AxonAI Landing Page

Premium AI automation agency landing page built with React, Tailwind CSS, and Vite. Designed specifically for professional services (law firms, med spas, real estate) in the LA market.

## Features

- **Dark luxury aesthetic** — Cold whites on deep blacks, no generic AI gradients
- **Fully responsive** — Mobile-first design that works on all devices
- **Zero-config animations** — Fade-in effects, hover states, and smooth transitions
- **Production-ready** — Optimized for performance and SEO
- **Easy customization** — Update content, colors, and sections without touching complex code

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site locally.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Customization Guide

### Update Your Contact Info

Open `landing-page.jsx` and find these sections:

**Navigation CTA (line ~60)**
```jsx
<a href="#contact" className="...">
  Book Demo
</a>
```

**Footer Email (line ~480)**
```jsx
<a href="mailto:hello@axonai.co" className="...">
  hello@axonai.co
</a>
```

**Calendly Link (line ~485)**
```jsx
<a href="https://calendly.com/yourusername" className="...">
  Book 20 Minutes
</a>
```

Replace with your actual email and Calendly link.

### Change Company Name

Find and replace all instances of "AxonAI" with your chosen business name:
- Line 50: Navigation logo
- Line 465: Footer logo  
- Line 479: Footer text

### Update Pricing

Edit the `pricing` array (starts around line 110):

```jsx
const pricing = [
  {
    tier: "Pilot",
    price: "$500",
    duration: "one-time",
    // ... edit as needed
  },
  // Add or remove tiers here
];
```

### Modify Solutions/Services

Edit the `solutions` array (starts around line 48):

```jsx
const solutions = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "24/7 Intake Agent",
    description: "...",
    // ... customize your offerings
  },
];
```

### Change Industries/Verticals

Edit the `industries` array (starts around line 77):

```jsx
const industries = [
  {
    name: "Law Firms",
    pain: "After-hours inquiries go unanswered...",
    win: "Instant qualification, 24/7 response...",
  },
  // Add your target verticals
];
```

### Update Colors

Open `tailwind.config.js` to modify the color scheme. The current palette uses:
- Background: `#0a0a0a` (near-black)
- Accents: white with varying opacity
- Borders: `white/10` to `white/30`

To change the accent color from white to another color:
1. Search for `text-white` throughout `landing-page.jsx`
2. Replace with your preferred color (e.g., `text-blue-400`, `text-amber-500`)

### Change Typography

The site uses three font stacks defined in `tailwind.config.js`:
- **Sans**: Inter (body text)
- **Serif**: Playfair Display (hero headline italic)
- **Mono**: JetBrains Mono (stats, badges)

To use different fonts:
1. Update the Google Fonts import in `src/index.css`
2. Update the `fontFamily` config in `tailwind.config.js`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Vercel auto-detects Vite — just click Deploy

Your site will be live at `yourproject.vercel.app` in ~2 minutes.

### Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## Custom Domain Setup

After deploying:

1. **Vercel**: Project Settings → Domains → Add your domain
2. **Netlify**: Site Settings → Domain Management → Add custom domain
3. **Railway**: Settings → Domains → Add custom domain

Update your DNS:
- Add CNAME record pointing to your hosting provider
- Wait 24-48 hours for propagation

## SEO Optimization

The `index.html` includes basic meta tags. For better SEO:

1. **Add Open Graph tags** (for social sharing):
```html
<meta property="og:title" content="AxonAI — AI Automation for Professional Services" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
```

2. **Create a sitemap**: Use a tool like [xml-sitemaps.com](https://www.xml-sitemaps.com)

3. **Submit to Google Search Console**: Add your sitemap and verify ownership

## Analytics Setup

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 measurement ID.

## Performance Tips

The site is already optimized, but for even better performance:

1. **Compress images**: Use [tinypng.com](https://tinypng.com) before adding images
2. **Enable caching**: Your hosting provider likely does this automatically
3. **Use WebP format**: For any images you add, convert to WebP
4. **Lazy load images**: Add `loading="lazy"` to `<img>` tags

## Troubleshooting

**Styles not loading in production?**
- Run `npm run build` and check the `dist/` folder
- Ensure `postcss.config.js` and `tailwind.config.js` are in the root

**Fonts not displaying correctly?**
- Check the Google Fonts link in `src/index.css`
- Verify font names match in `tailwind.config.js`

**Mobile menu not closing after click?**
- Already handled in the code via `onClick={() => setMobileMenuOpen(false)}`

## Project Structure

```
/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Main app wrapper
│   └── index.css         # Global styles + Tailwind
├── landing-page.jsx      # Main landing page component
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind theme config
└── postcss.config.js     # PostCSS config
```

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library
- **Google Fonts** — Typography (Inter, Playfair Display, JetBrains Mono)

## License

MIT — use this however you want. Built for Kal to close deals in LA.

## Support

Questions? Email hello@axonai.co or open an issue on GitHub.
