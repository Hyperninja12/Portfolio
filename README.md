# Portfolio — Modern Developer Portfolio

A premium, responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🎨 Modern dark mode SaaS design with glassmorphism
- 🌊 Smooth Framer Motion animations (fade, scale, float, stagger)
- 📱 Fully responsive — mobile, tablet, desktop
- ⚡ Fast builds with Vite
- 🧩 Component-based architecture
- 🔍 SEO-friendly HTML structure
- 🎯 Active navigation highlighting with IntersectionObserver
- 🌈 Gradient glow backgrounds and animated blobs

## 📁 Project Structure

```
src/
├── animations/       # Framer Motion animation variants
│   └── variants.js
├── components/       # Reusable UI components
│   ├── GradientBlob.jsx
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── SectionHeading.jsx
│   ├── SkillCard.jsx
│   ├── SocialLinks.jsx
│   └── TimelineItem.jsx
├── data/             # Portfolio content data
│   ├── experience.js
│   ├── projects.js
│   └── skills.js
├── sections/         # Page sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Render

### Static Site Deployment

1. Push your code to a **GitHub** repository
2. Go to [render.com](https://render.com) and sign up / log in
3. Click **New** → **Static Site**
4. Connect your GitHub repo
5. Configure:
   - **Build Command:** `npm install; npm run build`
   - **Publish Directory:** `dist`
6. Click **Create Static Site**
7. Your site will be live at `https://your-site.onrender.com`

### Environment Settings

| Setting           | Value                         |
|-------------------|-------------------------------|
| Build Command     | `npm install; npm run build`  |
| Publish Directory | `dist`                        |
| Node Version      | `18+`                         |

## 🎨 Customization

- Edit data files in `src/data/` to update your projects, skills, and experience
- Modify colors in `tailwind.config.js`
- Replace the avatar initials in `Hero.jsx` with your own image
- Update social links in `SocialLinks.jsx`
- Update meta tags in `index.html`

## 🛠️ Tech Stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React](https://lucide.dev)
