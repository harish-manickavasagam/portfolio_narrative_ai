# 🎨 AI Story Generator with Voice Narration - Portfolio Website

A stunning, fully responsive portfolio website showcasing an AI-powered story generation platform with text-to-speech narration. Built with pure HTML, CSS, and JavaScript, featuring a beautiful gradient color scheme (blue-purple-teal), smooth animations, and modern UI components.

## ✨ Features

### 🎯 Complete Sections
- **Hero Section** - Introduces the AI Story Generator with Voice Narration project
- **About Project** - Explains the AI-powered storytelling platform and its objectives
- **Key Features** - Showcases Text-to-Speech Narration, AI Generation, Customization, and Instant Processing
- **Technologies Used** - Displays tech stack including Python, OpenAI GPT, Firebase, and TTS Engine
- **Advantages & Disadvantages** - Honest evaluation of the AI storytelling system
- **Demo Section** - Space for video/GIF demonstrating story generation and narration
- **Contact Form** - Functional form with Firebase Firestore integration
- **Footer** - Clean footer with branding

### 🚀 Interactive Features
- ✅ Smooth scroll navigation between sections
- ✅ Sticky header with active section highlighting
- ✅ Reveal-on-scroll animations for all content
- ✅ Back-to-top button (appears after scrolling)
- ✅ Mobile-responsive hamburger menu
- ✅ Hover effects and micro-interactions throughout
- ✅ Form validation with user feedback
- ✅ Fully accessible with ARIA labels

### 🎨 Design Highlights
- **Color Palette**: Gradient blue → purple with teal and coral accents
- **Typography**: Poppins (headings) + Roboto (body)
- **Modern UI**: Cards, gradients, shadows, and smooth transitions
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark mode design with radial gradients

## 📁 Project Structure

```
PORTFOLIO/
├── index.html                 # Main HTML file with all sections
├── README.md                  # This file
├── assets/
│   ├── css/
│   │   └── style.css         # Complete styling with animations
│   ├── js/
│   │   └── main.js           # Interactive functionality
│   ├── img/
│   │   └── placeholder-*.svg # Placeholder images (replace with yours)
│   └── favicon.svg           # Gradient favicon
```

## 🎨 Customization Guide

### 1. **Colors** (Quick Theme Change)
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --bg: #0b1020;              /* Background color */
  --surface: #111630;          /* Card backgrounds */
  --text: #E6ECFF;            /* Primary text */
  --muted: #A6B1D1;           /* Secondary text */
  --primary: #7C4DFF;         /* Purple accent */
  --secondary: #00B8D9;       /* Teal accent */
  --accent: #FF6B6B;          /* Coral accent */
}
```

### 2. **Fonts**
Update the Google Fonts link in `index.html` (line 8-10) and font-family in CSS.

### 3. **Content**
- **Project Title**: "AI Story Generator with Voice Narration" (line 66)
- **About Section**: Describes AI-powered storytelling platform (lines 80-96)
- **Features**: Text-to-Speech Narration, AI Generation, Customization, Instant Processing (lines 109-156)
- **Technologies**: Python, OpenAI GPT, Firebase, TTS Engine, and more (lines 165-270)
- **Pros/Cons**: AI-specific advantages and challenges (lines 291-351)
- **Demo**: Video placeholder for story generation demo (lines 360-416)
- **Contact**: Firebase-integrated contact form (lines 421-442)

### 4. **Images**
Replace placeholder images in `assets/img/` with your own:
- Update `src` attributes in `index.html`
- Update `alt` text for accessibility
- Recommended formats: SVG, PNG, or WebP

### 5. **Demo Video**
Uncomment lines 341-351 in `index.html` and add your:
- Local video file path
- YouTube/Vimeo embed URL
- Or use a GIF

### 6. **Favicon**
Replace `assets/favicon.svg` or add `favicon.ico` and update line 11 in `index.html`.

## 🚀 How to Use

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For better performance and to avoid CORS issues:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx serve
```

**Using VS Code:**
Install "Live Server" extension and click "Go Live"

Then visit: `http://localhost:8000`

## 🔥 Firebase Setup (Optional)

The contact form is integrated with Firebase Firestore to save submissions. To enable this feature:

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Once created, click on "Web" (</>) to add a web app

### 2. Get Your Firebase Config
1. Register your app and copy the `firebaseConfig` object
2. Open `index.html` and replace the placeholder config (lines 22-29) with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### 3. Enable Firestore Database
1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Start in **test mode** (for development) or **production mode** (with security rules)
4. Choose a location closest to your users

### 4. Set Security Rules (Recommended)
In Firestore Database → Rules, add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow read: if false; // Only admins can read
      allow write: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp']);
    }
  }
}
```

### 5. View Submissions
- Go to Firestore Database in Firebase Console
- Check the `contacts` collection for form submissions
- Each document contains: name, email, message, timestamp, and read status

**Note:** If Firebase is not configured, the form will still work with a local fallback message.

## 📱 Responsive Breakpoints

- **Desktop**: 1180px+ (full layout)
- **Tablet**: 720px - 980px (2-column grids)
- **Mobile**: < 720px (single column, hamburger menu)

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support - some CSS features may not work)

## 📝 Code Comments

All code is thoroughly commented for easy customization:
- **HTML**: Section labels and structure notes
- **CSS**: Variable explanations and style groups
- **JavaScript**: Function descriptions and logic flow

## 🔧 Technical Details

### Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: IntersectionObserver, form validation, smooth interactions
- **Firebase**: Firestore database for contact form submissions
- **Project Stack**: Python, OpenAI GPT, TTS Engine for the actual AI story generator
- **Pure vanilla code**: Maximum performance without heavy frameworks

### Performance Features
- Lazy loading for images
- Optimized animations with `transform` and `opacity`
- Minimal JavaScript for fast load times
- SVG icons for crisp visuals at any size

## 🎓 Learning Resources

This project demonstrates:
- Modern CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- IntersectionObserver API
- Responsive design patterns
- Accessibility best practices
- Form validation
- Smooth scroll and animations

## 📄 License

MIT License - Free to use and modify for personal or commercial projects.

## 🙏 Credits

Created with ❤️ as a modern portfolio template. Feel free to customize and make it your own!

---

**Need help?** Check the code comments or modify the CSS variables for quick theme changes.
