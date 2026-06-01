# Parth Mahadik — Portfolio Website

A simple, static HTML/CSS/JS website with an integrated Chatbase chatbot.

## Structure

```
chatbot-simple/
├── index.html          # Main HTML page
├── styles.css          # All styling
├── script.js           # Interactivity & Chatbase
├── netlify.toml        # Netlify deployment config
├── .gitignore          # Git ignore rules
└── assets/             # Images (cloud.png, green-mountains.jpg, parth-hero.jpeg)
```

## Features

- ✅ Pure HTML/CSS/JavaScript (no build step required)
- ✅ Responsive design
- ✅ Chatbase chatbot widget integrated
- ✅ Smooth scrolling navigation
- ✅ Contact form
- ✅ Static hosting ready (Netlify)

## Deployment

1. Push to GitHub
2. Connect to Netlify
3. Netlify will automatically deploy from the `chatbot-simple` directory

No build step needed! Netlify will serve the files as-is.

## Local Testing

Just open `index.html` in your browser. Everything works locally!

```bash
# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## Chatbase Integration

The Chatbase widget loads automatically from the CDN. You can customize it by modifying the script tag in `index.html`:

```html
<script src="https://www.chatbase.co/embed.min.js" id="VFo3rPyORQ_NroNKog-fj" domain="www.chatbase.co" async></script>
```
