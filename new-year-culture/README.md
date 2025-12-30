# 🎆 New Year Cultural Website

A beautiful, responsive website celebrating New Year traditions and cultural stories from around the world. Built with React, TypeScript, and Tailwind CSS.

![New Year Culture](https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800)

## 🌍 Project Overview

This website serves as a comprehensive resource for exploring how different cultures around the globe welcome the new year. From ancient traditions to modern celebrations, discover the rich tapestry of New Year customs that unite humanity in the spirit of hope and renewal.

### New Year Cultural Theme

The New Year has been celebrated for over 4,000 years, marking humanity's eternal optimism and belief in fresh starts. Our website showcases:

- **Global Traditions**: From Spain's 12 grapes to Japan's first sunrise viewing
- **Cultural Events**: Major celebrations like Times Square Ball Drop and Sydney Harbour Fireworks
- **Historical Stories**: The origins and evolution of New Year celebrations
- **Universal Themes**: Renewal, community, hope, and reflection

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **React Router** | Navigation |
| **pnpm** | Package Manager |

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd new-year-culture
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 📁 Project Structure

```
new-year-culture/
├── public/
│   └── favicon.svg          # App favicon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── cards/           # Card components (Tradition, Event, Story)
│   │   ├── common/          # Common components (Modal, CountdownTimer)
│   │   └── layout/          # Layout components (Navbar, Footer)
│   ├── data/                # Mock data
│   │   ├── traditions.ts    # New Year traditions data
│   │   ├── events.ts        # New Year events data
│   │   └── stories.ts       # Cultural stories data
│   ├── hooks/               # Custom React hooks
│   │   ├── useCountdown.ts  # Countdown timer hook
│   │   └── useModal.ts      # Modal state management hook
│   ├── pages/               # Page components
│   │   ├── HomePage/        # Home page with hero and countdown
│   │   ├── TraditionsPage/  # Traditions with region filter
│   │   ├── EventsPage/      # Events with modal details
│   │   ├── StoriesPage/     # Cultural stories
│   │   └── AboutPage/       # About the website
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## ✨ Implemented Features

### Pages

- [x] **Home Page** (`/`)
  - Hero section with New Year theme
  - Real-time countdown timer to next New Year
  - Featured traditions showcase (3-5 cards)
  - Navigation to other pages
  - Cultural significance section

- [x] **Traditions Page** (`/traditions`)
  - List of 12 New Year traditions from different cultures
  - Each tradition card with title, country, region, description
  - Filter by region (Asia, Europe, Americas, Africa, Oceania, Middle East)
  - Responsive grid layout

- [x] **Events Page** (`/events`)
  - List of 8 New Year events
  - Event cards with name, date, location, description
  - Modal popup for detailed event information
  - Image support for events

- [x] **Stories Page** (`/stories`)
  - 6 cultural stories and articles
  - Title, excerpt, and expandable "Read More" interaction
  - Author and publish date metadata
  - Read time estimates

- [x] **About Page** (`/about`)
  - Website mission and purpose
  - Cultural significance of New Year
  - Historical timeline
  - Call-to-action sections

### Components

- [x] **Navigation Bar** - Responsive with mobile menu
- [x] **Footer** - Links and copyright
- [x] **Countdown Timer** - Real-time updates every second
- [x] **Modal** - Accessible with keyboard navigation and focus trap
- [x] **Tradition Card** - With featured variant
- [x] **Event Card** - With view details button
- [x] **Story Card** - With expandable content

### Technical Features

- [x] TypeScript with strict mode
- [x] Responsive design (mobile, tablet, desktop)
- [x] Tailwind CSS with custom theme
- [x] React Router for navigation
- [x] Lazy loading for pages
- [x] Custom hooks for state management
- [x] Accessibility (ARIA labels, semantic HTML, keyboard navigation)
- [x] Consistent festive color scheme

## 🎨 Design System

### Colors

| Color | Usage |
|-------|-------|
| **Festive Gold** (#FFD700) | Primary accent, CTAs |
| **Festive Red** (#C41E3A) | Secondary accent, highlights |
| **Festive Midnight** (#191970) | Primary background, text |
| **Purple Gradient** | Hero sections, navigation |

### Typography

- **Display**: Georgia serif for headings
- **Body**: System UI sans-serif for content

## ✅ Manual Validation Guide

1. **Home Page**
   - Verify countdown timer updates every second
   - Check featured traditions display (5 cards)
   - Test navigation links work correctly
   - Confirm responsive layout on mobile/tablet

2. **Traditions Page**
   - Test all region filters
   - Verify grid responds to screen size
   - Check tradition cards display all information

3. **Events Page**
   - Click "View Details" to open modal
   - Test modal close (X button, Escape key, backdrop click)
   - Verify event information is complete

4. **Stories Page**
   - Click "Read More" to expand story content
   - Click "Show Less" to collapse
   - Check all metadata displays

5. **About Page**
   - Verify all content sections display
   - Test CTA buttons navigate correctly

6. **Accessibility**
   - Navigate using keyboard only (Tab, Enter, Escape)
   - Check screen reader announces content properly
   - Verify color contrast is sufficient

## 🚧 Known Limitations

1. **No Backend API**: All data is mock/static data stored in `src/data/`
2. **No User Authentication**: Not implemented as per specification
3. **No Internationalization**: English only
4. **No Real-time Data**: Events and traditions are static
5. **Image Placeholders**: Uses Unsplash URLs that may not load without internet

## 📄 License

MIT License - Free to use for educational and personal projects.

---

🎉 **Happy New Year!** 🎉

Built with ❤️ to celebrate cultural diversity and the universal spirit of new beginnings.
