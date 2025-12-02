# Cryptic Coders - College Coding Club Website

A modern, feature-rich website for the Cryptic Coders college coding club, built with React, TypeScript, and TailwindCSS with stunning purple/lavender themed animations.

## 🚀 Features

### Pages
- **Home** - Dynamic hero section with animated gradient background, floating particles, typewriter effect, and statistics showcase
- **About** - Club mission, vision, core values, and technology stack with interactive animations
- **Team** - Filterable team member showcase with flip card animations and social links
- **Events** - Past and upcoming events with beautiful card layouts and modal details
- **Contact** - Fully validated contact form with React Hook Form + Zod, social media links, and office hours

### Design Highlights
- 🎨 **Purple/Lavender Color Scheme** - Sophisticated gradient meshes from purple → violet → fuchsia
- ✨ **Glassmorphism** - Modern glass-effect cards with purple tints throughout
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🌙 **Dark Theme** - Beautiful dark mode with purple accent glows
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎯 **Interactive Elements** - Hover effects, 3D transforms, and micro-interactions
- 🎪 **Custom Scrollbar** - Purple-themed scrollbar styling

## 🛠️ Tech Stack

### Core
- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework

### Libraries
- **Framer Motion** - Smooth animations and transitions
- **GSAP** - Advanced animation capabilities
- **React Router v6** - Client-side routing
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **React Hot Toast** - Beautiful notifications
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll-based animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Updating Team Members
Edit `src/data/team.ts` to add/modify team members.

### Adding Events
Edit `src/data/events.ts` to add/modify events.

### Changing Colors
Update `tailwind.config.js` to modify the purple color scheme.

## 🚀 Deployment

Build for production and deploy to Vercel, Netlify, or any static hosting:

```bash
npm run build
```

## 📄 License

Built with ❤️ by Cryptic Coders

---

**Contact**: crypticcoder2025@gmail.com

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
