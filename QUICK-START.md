# 🚀 Quick Start Guide

## View the Website

### Option 1: Double-Click (Easiest)
Simply **double-click** on `index.html` and it will open in your default browser.

### Option 2: Live Server (Recommended for Development)
If you have VS Code or Cursor:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Command Line
```bash
# Navigate to the project folder
cd "/Users/hardikdewra/Documents/Cursor Projects/DUO DIGITAL - NEO BRUTALISM PROJECT"

# Open in default browser (macOS)
open index.html

# Or use Python's built-in server
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📋 Quick Customization Checklist

### 1. Update Content
Edit `index.html` and replace:
- [ ] Company name and tagline
- [ ] Service descriptions
- [ ] Contact information (email, phone)
- [ ] Metrics and statistics
- [ ] Footer links

### 2. Adjust Colors
Edit `styles.css` (lines 15-25):
```css
--blueprint-blue: #0066CC;    /* Change to your brand color */
--concrete-gray: #2A2A2A;     /* Secondary color */
--signal-orange: #FF6B00;     /* Accent color */
```

### 3. Modify Typography
Edit `styles.css` (line 30):
```css
--font-primary: 'Your Font', sans-serif;
```
Don't forget to add the font link in `index.html` (lines 9-11)

### 4. Add Your Logo
Replace the text logo in `index.html` (line 21):
```html
<div class="nav-logo">
    <img src="your-logo.png" alt="Logo">
</div>
```

---

## 🎨 Design System at a Glance

### Color Usage
- **Blueprint Blue** (#0066CC) — Primary actions, links, accents
- **Concrete Gray** (#2A2A2A) — Body text, secondary elements
- **Concrete Dark** (#1A1A1A) — Headings, borders, heavy elements
- **Off-White** (#F5F3EF) — Main background
- **Cream** (#FAF8F4) — Alternate background sections
- **Signal Orange** (#FF6B00) — Important CTAs, status badges

### Typography Scale
- **Hero**: 10rem (clamps to 4rem on mobile)
- **Section Titles**: 4rem (clamps to 2.5rem on mobile)
- **Card Titles**: 1.75rem
- **Body Text**: 1rem (base)
- **Labels**: 0.75rem - 0.875rem

### Spacing System
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 4rem (64px)
- **XL**: 6rem (96px)
- **XXL**: 8rem (128px)

---

## 🎯 Key Interactive Features

### Navigation
- Auto-hides on scroll down
- Shows on scroll up
- Mobile hamburger menu
- Smooth anchor scrolling

### Hero Section
- Parallax scrolling effect
- Staggered title reveal animation
- Grid coordinate tracker (top right)

### Service Cards
- 3D tilt on mouse movement
- Color inversion on hover
- Click animation

### Statistics
- Animated counters on scroll into view
- Animates only once per page load

### Buttons
- Ripple effect on click
- Background slide animations
- Arrow shift on hover

---

## 📱 Testing Checklist

- [ ] Desktop (1920px+)
- [ ] Laptop (1440px)
- [ ] Tablet (768px - 1024px)
- [ ] Mobile (375px - 767px)
- [ ] Test all button interactions
- [ ] Test mobile menu
- [ ] Verify all animations work smoothly
- [ ] Check scroll behavior
- [ ] Test form submissions (if added)

---

## 🐛 Troubleshooting

### Fonts not loading?
Check your internet connection. Google Fonts are loaded from CDN.

### Animations not working?
Ensure JavaScript is enabled in your browser.

### Mobile menu not opening?
Check browser console for errors. Ensure `script.js` is properly linked.

### Layout issues?
Clear browser cache and hard reload (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## 🎁 Bonus Tips

1. **Test with Lighthouse** (Chrome DevTools) for performance scores
2. **Add Google Analytics** by inserting tracking code in `<head>`
3. **Optimize images** if you add photos (use WebP format)
4. **Consider adding** a contact form backend (Formspree, Netlify Forms, etc.)
5. **Deploy for free** on:
   - Netlify
   - Vercel
   - GitHub Pages
   - Cloudflare Pages

---

## 📞 Need Help?

If you run into issues:
1. Check the browser console for errors (F12)
2. Validate HTML: https://validator.w3.org/
3. Validate CSS: https://jigsaw.w3.org/css-validator/

---

**Happy Building! 🏗️**

