# New Year Cultural Website

A modern, responsive web application showcasing New Year traditions and celebrations from around the world.

## Features

- 🌍 **Global Traditions**: Explore New Year customs from different cultures and regions
- 🎆 **Events Calendar**: Discover major New Year celebrations worldwide
- 📖 **Cultural Stories**: Read fascinating articles about New Year traditions
- ⏰ **Live Countdown**: Real-time countdown to the next New Year
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ♿ **Accessible**: Built with semantic HTML and ARIA labels

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **pnpm** for package management

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── TraditionCard.tsx
│   │   ├── EventCard.tsx
│   │   ├── StoryCard.tsx
│   │   └── Modal.tsx
│   ├── pages/          # Page-level components
│   │   ├── Home.tsx
│   │   ├── Traditions.tsx
│   │   ├── Events.tsx
│   │   ├── Stories.tsx
│   │   └── About.tsx
│   ├── data/           # Mock data
│   │   ├── traditions.ts
│   │   ├── events.ts
│   │   └── stories.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Pages

### Home (/)
- Hero section with New Year theme
- Real-time countdown timer
- Featured traditions showcase
- Call-to-action sections

### Traditions (/traditions)
- Comprehensive list of global New Year traditions
- Filter by region (Asia, Europe, Americas, Africa, Oceania)
- Responsive grid layout
- Detailed tradition cards

### Events (/events)
- List of major New Year events worldwide
- Event details in modal dialogs
- Date, location, and description for each event

### Stories (/stories)
- Cultural articles about New Year traditions
- "Read more" functionality with modal display
- Rich content with images

### About (/about)
- Purpose and mission of the website
- Cultural significance of New Year celebrations
- What the website offers

## Accessibility

- Semantic HTML elements throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA compliant)
- Screen reader friendly

## Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## License

This project is created for educational and informational purposes.

## Acknowledgments

- Images from Unsplash
- Icons using emoji for universal compatibility
