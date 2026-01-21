# Shimanshu Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- ✨ Clean and modern design
- 🎨 Built with Tailwind CSS
- ⚡ Fast and responsive
- 📱 Mobile-friendly layout
- 🎯 Component-based architecture

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Profile sidebar with image and hire button
│   ├── Header.jsx        # Navigation tabs (About, Resume, Portfolio)
│   ├── About.jsx         # About Me section
│   ├── WhatImDoing.jsx   # Services/Skills cards
│   └── Testimonials.jsx  # Client testimonials
├── App.jsx               # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile image:
   - Place your profile image in the `public` folder as `profile.jpg`
   - Or update the image path in `src/components/Sidebar.jsx`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#1e1e1f',      // Main background
    card: '#2b2b2c',    // Card background
    border: '#383838',  // Border color
  },
  accent: {
    yellow: '#ffdb70',  // Primary accent
    purple: '#7c3aed',  // Secondary accent
  }
}
```

### Content

Update the content in respective component files:
- **Sidebar**: `src/components/Sidebar.jsx`
- **About Me**: `src/components/About.jsx`
- **Services**: `src/components/WhatImDoing.jsx`
- **Testimonials**: `src/components/Testimonials.jsx`

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## License

MIT License - feel free to use this project for your own portfolio!

