# kerimdorukakinci.com

Personal website of Kerim Doruk AKINCI - Cloud Solutions Architect & DevOps Engineer.

## Overview

A minimalist personal landing page featuring modern glassmorphism design with smooth animations and full responsive support.

**Live:** [www.kerimdorukakinci.com](https://www.kerimdorukakinci.com)

## Features

- Modern glassmorphism UI with backdrop blur effects
- Animated gradient background with floating particles
- Smooth entrance animations
- Fully responsive (mobile, tablet, desktop)
- Accessibility support (reduced motion, high contrast)
- Social media links with hover effects

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, animations, backdrop-filter
- **Font Awesome 6** - Social media icons (CDN)
- **Google Fonts** - Inter font family
- **nginx:alpine** - Production server
- **Docker** - Containerization

## Local Development

Open `index.html` directly in a browser, or serve with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## Deployment

### Docker

```bash
docker build -t kerimdorukakinci-website .
docker run -p 8080:80 kerimdorukakinci-website
```

### Static Hosting

Upload the following to any static hosting provider (S3, Netlify, Vercel, GitHub Pages):
- `index.html`
- `static/` directory

## CI/CD

Automated deployment via Concourse CI pipeline:
- Builds Docker image on git tags
- Deploys static files to AWS S3
- Slack notifications for build status

## Project Structure

```
.
├── index.html              # Main page
├── static/
│   ├── assets/
│   │   └── css/
│   │       └── main.css    # Glassmorphism styles
│   └── images/
│       ├── avatar.jpg      # Profile photo
│       └── bg.jpg          # Background (unused)
├── Dockerfile              # nginx container
├── ci/
│   └── website-pipeline.yml # Concourse pipeline
└── README.md
```

## License

GPL-3.0 - See [LICENSE](LICENSE) for details.
