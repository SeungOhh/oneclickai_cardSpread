# OneClick AI - Card Spreading Component

A modern, interactive React application showcasing AI education projects with beautiful card animations and scroll-based interactions.

## 🚀 Features

- **Dynamic Card Animation**: Smooth transition from fan layout to grid layout based on scroll position
- **Interactive UI**: Responsive cards with hover effects and smooth transitions  
- **Modern Design**: Beautiful gradient backgrounds with animated patterns
- **AI Project Showcase**: 18 different AI/ML projects with custom images and descriptions
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Dark/Light Theme**: Built-in theme switching capability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/seungohh/oneclickai_cardSpread.git
cd oneclickai_cardSpread
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Key Components

### TrainExampleComponent
The main component featuring:
- **Fan Animation**: Cards start in a fan layout and transition to grid
- **Scroll-based Animation**: Smooth transitions triggered by scroll position
- **Dual Layout System**: Fan cards (12) + Grid cards (6) for optimal visual flow
- **Performance Optimized**: Memoized calculations and smooth animations

### Dynamic Background
- **Gradient Animation**: Multi-layered radial and linear gradients
- **Scroll-responsive**: Background opacity changes with scroll position
- **Animated Patterns**: Floating dot patterns with CSS animations

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page with welcome card and background
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── TrainExampleComponent.tsx  # Main card animation component
│   ├── allContentData.tsx   # AI project data and types
│   ├── navbar.tsx           # Navigation component
│   └── theme-provider.tsx   # Theme context provider
└── public/
    └── *.jpg               # AI project images (18 unique images)
\`\`\`

## 🎯 Animation System

The card animation system uses a sophisticated scroll-based approach:

1. **Initial State**: Cards arranged in two fan formations
2. **Scroll Trigger**: Animation starts at 10px scroll, completes at 40% viewport height
3. **Smooth Transitions**: Uses cubic-bezier easing for natural movement
4. **Grid Formation**: Cards settle into a 3-column responsive grid

### Animation Configuration
\`\`\`typescript
const ANIMATION_CONFIG = {
  scroll: { start: 10, endRatio: 0.4 },
  fan: { totalCards: 6, totalSets: 2 },
  grid: { columns: 3, cardSpacing: 460 },
  transition: { duration: "0.5s", easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }
}
\`\`\`

## 🎨 Styling System

- **Design Tokens**: Semantic color system in globals.css
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Consistent styling with class-variance-authority
- **Animation Library**: Custom CSS animations with Tailwind utilities

## 🔗 External Links

- **OneClick AI Website**: [https://oneclickai.co.kr](https://oneclickai.co.kr)
- **Developer GitHub**: [https://github.com/seungohh](https://github.com/seungohh)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column layout  
- **Desktop**: > 1024px - Three column layout

## 🚀 Deployment

This project is optimized for deployment on Vercel:

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Seung Young Oh**
- GitHub: [@SeungOhh](https://github.com/seungohh)
- Website: [OneClick AI](https://oneclickai.co.kr)

---

Built with ❤️ using Next.js and Tailwind CSS
