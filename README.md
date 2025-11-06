# Bernardo Martin-Iradi - Personal Website V2

A clean, custom-built personal academic website with no external dependencies or frameworks.

## Features

- **Pure HTML/CSS/JavaScript** - No frameworks, no build process
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Mode Support** - Automatic based on system preferences
- **Custom Icons** - Full control over all SVG icons
- **Easy to Maintain** - Simple data files for content management
- **Fast Loading** - Minimal dependencies, optimized performance

## Project Structure

```
personal-website-v2/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles
├── js/
│   └── main.js            # JavaScript functionality
├── data/
│   ├── experience.js      # Teaching experience data
│   ├── awards.js          # Awards data
│   └── publications.js    # Publications data
├── assets/
│   ├── icons/             # SVG icons
│   │   ├── award.svg
│   │   ├── org-eth.svg
│   │   └── org-dtu.svg
│   └── CV.pdf            # Curriculum Vitae
└── README.md

## How to Update Content

### Adding/Editing Experience

Edit `data/experience.js`:

```javascript
{
    position: "Your Position",
    company: "Company Name",
    logo: "org-name",  // Filename of icon in assets/icons/ (without .svg)
    dateStart: "YYYY-MM-DD",
    dateEnd: "YYYY-MM-DD",  // or null for present
    description: "Your description"
}
```

### Adding/Editing Awards

Edit `data/awards.js`:

```javascript
{
    title: "Award Title",
    awarder: "Organization",
    date: "YYYY-MM-DD",
    icon: "award",  // Filename of icon in assets/icons/ (without .svg)
    url: "https://...",
    description: "Award description"
}
```

### Adding/Editing Publications

Edit `data/publications.js`:

```javascript
{
    title: "Paper Title",
    authors: "Author list",
    venue: "Journal/Conference",
    year: "YYYY",
    url: "https://..."
}
```

### Adding Custom Icons

1. Add your SVG file to `assets/icons/`
2. Reference it by filename (without .svg extension) in the data files
3. For best results, edit SVG to use `currentColor` for dynamic theming

## Local Development

Simply open `index.html` in your web browser. No build process required!

For a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit http://localhost:8000

## Deployment

### GitHub Pages

1. Create a new repository
2. Push this code to the repository
3. Go to Settings > Pages
4. Select branch `main` and folder `/` (root)
5. Save and your site will be live

### Netlify

1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. No build command needed - it's all static files

### Any Static Host

Upload all files to your hosting provider. The site will work immediately.

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #10b981;  /* Main brand color */
    --primary-dark: #059669;   /* Darker shade */
    /* ... more colors */
}
```

### Typography

Change fonts in `css/styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Layout

All layout is controlled in `css/styles.css`. Grid columns, spacing, and responsive breakpoints can be adjusted there.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this template for your own website!

## Credits

Built from scratch by Bernardo Martin-Iradi with Claude Code.
