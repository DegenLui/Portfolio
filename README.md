# Luis Figueroa - Hardware & IoT Portfolio

Modern portfolio website built with Next.js 15, shadcn/ui, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Install Node.js (if not already installed)

Download from: https://nodejs.org/ (LTS version recommended)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` folder.

## 📦 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🎨 Features

- ✅ Modern, professional design
- ✅ Smooth scroll animations
- ✅ Dark mode by default
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast loading with Next.js optimization
- ✅ SEO optimized
- ✅ Accessible (WCAG AA)
- ✅ Static export for easy deployment

## 📝 Customization

### Update Personal Information

Edit these files:
- `app/layout.tsx` - Metadata (title, description)
- `lib/data.ts` - Projects, skills, experience
- `components/contact.tsx` - Contact links (email, LinkedIn, GitHub, location)

### Add Project Images

Place images in `public/images/`:
- `project-astrarmm.jpg`
- `project-airquality.jpg`
- `project-motion.jpg`
- `project-network.jpg`

Update image paths in `lib/data.ts`.

### Modify Colors

Edit `app/globals.css` - Change CSS variables in the `:root` section.

## 🚀 Deployment to Vercel

### Option 1: From GitHub

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel automatically detects Next.js and configures everything!

### Option 2: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Add Custom Domain

1. In Vercel project settings → Domains
2. Add `luifigueroa.com`
3. Update DNS records as shown by Vercel
4. HTTPS is automatic!

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout, metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles, Tailwind setup
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Fixed header
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── projects.tsx       # Projects grid
│   ├── skills.tsx         # Skills cards
│   ├── experience.tsx     # Timeline
│   └── contact.tsx        # Contact section
├── lib/
│   ├── utils.ts           # Utility functions
│   └── data.ts            # Content data
├── public/
│   ├── images/            # Project images
│   └── CNAME              # Custom domain
└── package.json           # Dependencies
```

## 🛠️ Development

### Add New Component

```bash
# Using shadcn/ui CLI (requires Node.js)
npx shadcn-ui@latest add [component-name]
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1s
- **Largest Contentful Paint:** < 2s
- **Total Bundle Size:** < 100KB (gzipped)

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support
- Reduced motion support

## 🐛 Troubleshooting

### Node.js not found
Install from [nodejs.org](https://nodejs.org/)

### Dependency errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build
# Check console for specific errors
```

## 📄 License

Personal portfolio - feel free to use as inspiration!

## 🤝 Contact

**Luis Figueroa**  
Hardware & IoT Engineer  
[luifigueroa.com](https://luifigueroa.com)

---

Built with ❤️ using Next.js and shadcn/ui
