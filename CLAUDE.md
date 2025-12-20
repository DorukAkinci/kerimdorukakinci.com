# CLAUDE.md

Project context for AI assistants working on this codebase.

## Project Overview

Personal website for Kerim Doruk AKINCI - a minimalist landing page with modern glassmorphism design.

**Live URL:** https://www.kerimdorukakinci.com/

## Tech Stack

- **HTML5** - Single page (`index.html`)
- **CSS3** - Custom glassmorphism styles (`static/assets/css/main.css`)
- **Font Awesome 6** - Icons loaded from CDN
- **Google Fonts** - Inter font family from CDN

No build tools, no JavaScript, no dependencies to install.

## Project Structure

```
.
├── index.html                    # Main page
├── CNAME                         # GitHub Pages custom domain
├── static/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # All styles (glassmorphism, animations)
│   └── images/
│       ├── avatar.jpg            # Profile photo
│       └── bg.jpg                # Unused
├── Dockerfile                    # nginx:alpine container
├── ci/
│   └── website-pipeline.yml      # Concourse CI pipeline (legacy)
├── LICENSE                       # GPL-3.0
└── README.md
```

## Deployment

### GitHub Pages (Primary)

- **Source:** `master` branch, root folder
- **Custom domain:** www.kerimdorukakinci.com (configured via CNAME file)
- **Auto-deploy:** Push to `master` triggers automatic deployment
- **Settings:** https://github.com/DorukAkinci/kerimdorukakinci.com/settings/pages

To update the site:
```bash
git add -A && git commit -m "message" && git push
```

### Docker (Alternative)

```bash
docker build -t kerimdorukakinci-website .
docker run -p 8080:80 kerimdorukakinci-website
```

### Local Development

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000

## CSS Architecture

All styles in `main.css` using CSS custom properties:

```css
:root {
    --bg-gradient-1: #0f0c29;
    --bg-gradient-2: #302b63;
    --bg-gradient-3: #24243e;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --accent-color: #6366f1;
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
}
```

Key features:
- Glassmorphism card with `backdrop-filter: blur(20px)`
- Animated gradient background with floating particles
- Entrance animations (card, avatar, content, links)
- Hover effects on social icons
- Responsive breakpoints: 480px, 360px
- Accessibility: reduced motion, high contrast support

## Social Links

Edit `index.html` to add/remove/modify social links. Icons use Font Awesome classes:
- `fab fa-github`
- `fab fa-linkedin-in`
- `fab fa-x-twitter`
- etc.

## Common Tasks

### Update profile info
Edit `index.html` - change `.name` and `.title` content

### Change colors
Edit CSS variables in `main.css` `:root` block

### Add new social link
Copy existing `<a>` block in `.social-links` nav, update href and icon class

### Update avatar
Replace `static/images/avatar.jpg`

## Legacy Infrastructure

The `ci/website-pipeline.yml` is a Concourse CI pipeline that:
- Builds Docker images on git tags
- Deploys to AWS S3 bucket

This is legacy - primary deployment is now GitHub Pages.
