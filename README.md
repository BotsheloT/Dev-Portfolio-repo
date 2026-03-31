# Botshelo Tlhabanyane — Portfolio

Personal portfolio site built with Next.js 14 and TypeScript.

## Getting started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```
src/
└── app/
    ├── page.tsx              # Root page — composes all sections
    ├── layout.tsx            # HTML shell + metadata
    ├── globals.css           # Design tokens + shared styles
    └── components/
        ├── Nav.tsx / .css    # Sticky navigation
        ├── Hero.tsx / .css   # Intro + stats + skill tags
        ├── About.tsx / .css  # Personal story + fact cards
        ├── Work.tsx / .css   # Project breakdowns
        ├── Skills.tsx / .css # Skills grid
        ├── Approach.tsx/.css # How I work
        ├── Contact.tsx / .css# Contact links
        └── Footer.tsx / .css # Footer
```

---

## Customising content

All content is stored directly in the component files as plain arrays/objects — no CMS or external data source needed.

| What to update | Where to find it |
|---|---|
| Your name, title, bio | `Hero.tsx` and `layout.tsx` |
| Stats (years, projects) | `Hero.tsx` → `stats` array |
| About me text | `About.tsx` |
| Fact cards (location, etc.) | `About.tsx` → `facts` array |
| Projects | `Work.tsx` → `projects` array |
| Skills list | `Skills.tsx` → `skills` array |
| How I work | `Approach.tsx` → `items` array |
| Contact links | `Contact.tsx` |

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect Next.js — just click **Deploy**
4. Your site will be live at a `.vercel.app` URL

No extra configuration needed.
