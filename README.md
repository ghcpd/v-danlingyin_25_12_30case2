# New Year Cultural Website 🎊

A modern, responsive web application celebrating New Year traditions and cross-cultural celebrations from around the world. Built with React, TypeScript, and Tailwind CSS.

## 📖 Project Overview

This website showcases:
- **Global New Year Traditions**: Discover how different cultures celebrate the new year
- **Major Events**: Explore spectacular New Year celebrations worldwide
- **Cultural Stories**: Read fascinating tales about New Year customs and their origins
- **Live Countdown**: Real-time countdown timer to the next New Year
- **Interactive Features**: Filter traditions by region, view event details, and read full stories

## 🎯 Cultural Theme

The website celebrates the universal human tradition of marking new beginnings while honoring the unique ways different cultures welcome the new year. From Japan's first sunrise (Hatsuhinode) to Spain's twelve grapes, from Scotland's first-footing to China's lantern releases, this site is a digital gathering place for cultural appreciation and learning.

## 🛠️ Tech Stack

- **Framework**: React 18.2
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router 6.21
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (Install with: `npm install -g pnpm`)

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd GPT-5.1-Codex-Max
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If not, manually navigate to this URL

## 🚀 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (outputs to `dist/`)
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint to check code quality

## 📁 Project Structure

```
GPT-5.1-Codex-Max/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx          # Navigation bar with routing
│   │   ├── Footer.tsx          # Footer with copyright
│   │   ├── CountdownTimer.tsx  # Real-time countdown timer
│   │   ├── TraditionCard.tsx   # Tradition display card
│   │   ├── EventCard.tsx       # Event display card
│   │   ├── StoryCard.tsx       # Story preview card
│   │   └── Modal.tsx           # Reusable modal component
│   ├── pages/           # Page-level components
│   │   ├── Home.tsx            # Landing page with hero & countdown
│   │   ├── Traditions.tsx      # Traditions list with filtering
│   │   ├── Events.tsx          # Events list with modal details
│   │   ├── Stories.tsx         # Stories with read more feature
│   │   └── About.tsx           # About page with static content
│   ├── data/            # Mock data files
│   │   ├── traditions.ts       # 10 tradition entries
│   │   ├── events.ts           # 8 event entries
│   │   └── stories.ts          # 5 story entries
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts            # Tradition, Event, Story, Region types
│   ├── App.tsx          # Root component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles & Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration (strict mode)
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind theme customization
└── postcss.config.js    # PostCSS configuration
```

## ✨ Implemented Features

### Core Pages (All Required Pages Implemented)

1. **Home Page (`/`)**
   - Hero section with New Year theme and welcoming message
   - Real-time countdown timer to New Year 2027
   - Featured traditions section (3 cards)
   - Quick navigation links to other sections

2. **Traditions Page (`/traditions`)**
   - Grid layout of 10 New Year traditions from around the world
   - Filter by region: All, Asia, Europe, Americas, Africa, Oceania
   - Each card shows: title, country, region, description
   - Responsive grid: 1 column (mobile) → 3 columns (desktop)

3. **Events Page (`/events`)**
   - Grid of 8 major New Year events worldwide
   - Each card shows: name, date, location, short description
   - Click to view full details in modal
   - Modal includes formatted date, location, and full description

4. **Stories Page (`/stories`)**
   - 5 cultural stories about New Year traditions
   - Each card shows: title, author, date, excerpt
   - "Read More" button opens full story in modal
   - Stories include historical context and cultural significance

5. **About Page (`/about`)**
   - Purpose and mission of the website
   - Explanation of New Year cultural significance
   - Overview of website features
   - Inspirational closing message

### UI Components

- **Navbar**: Sticky top navigation with active state indicators, mobile-responsive hamburger menu
- **Footer**: Copyright notice and tagline
- **Countdown Timer**: Live updating timer showing days, hours, minutes, seconds until New Year 2027
- **Cards**: Reusable components for traditions, events, and stories with consistent styling
- **Modal**: Accessible modal with keyboard support (ESC to close), backdrop click to close

### Interactive Features

- ✅ Navigation between all pages
- ✅ Real-time countdown timer with automatic updates every second
- ✅ Region filter on traditions page with active state styling
- ✅ Modal interactions for events and stories
- ✅ Keyboard navigation support (Enter/Space to activate, ESC to close)
- ✅ Mobile-responsive hamburger menu

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid layouts adapt: 1 column → 2 columns → 3 columns
- Touch-friendly buttons and interactive elements
- Readable typography at all screen sizes

### Accessibility

- ✅ Semantic HTML elements (`nav`, `main`, `footer`, `article`, `section`)
- ✅ ARIA labels on interactive elements
- ✅ ARIA live regions for countdown timer
- ✅ Keyboard navigation fully supported
- ✅ Focus states on all interactive elements
- ✅ Sufficient color contrast (tested with WCAG guidelines)
- ✅ Alt text and aria-labels for icons and images

### TypeScript Quality

- ✅ Strict mode enabled in `tsconfig.json`
- ✅ No `any` types used (100% type safety)
- ✅ All props interfaces defined
- ✅ Full type coverage for data structures (Tradition, Event, Story, Region)
- ✅ Type-safe event handlers and state management

### Code Quality

- Clean, functional components with hooks
- DRY principles applied (reusable components)
- Clear naming conventions
- Proper separation of concerns (components, pages, data, types)
- Performance optimizations (useMemo for filtered data)

## 🧪 Manual Validation Guide

### 1. Installation Test
```bash
pnpm install
pnpm dev
```
✓ Should install without errors and start dev server on port 3000

### 2. Navigation Test
- Click each nav link (Home, Traditions, Events, Stories, About)
- ✓ Active page should be highlighted in gold
- ✓ URL should change appropriately
- ✓ Page content should render correctly

### 3. Countdown Timer Test
- View home page
- ✓ Countdown should display and update every second
- ✓ Should show time remaining until January 1, 2027

### 4. Traditions Filter Test
- Navigate to Traditions page
- Click different region filters (All, Asia, Europe, Americas, Oceania)
- ✓ Grid should update to show only traditions from selected region
- ✓ Active filter button should be highlighted in gold
- ✓ Counter should show filtered count

### 5. Events Modal Test
- Navigate to Events page
- Click any event card or "View Details" button
- ✓ Modal should open with full event details
- ✓ Click backdrop or X button to close
- ✓ Press ESC key to close modal

### 6. Stories Modal Test
- Navigate to Stories page
- Click "Read More" on any story
- ✓ Modal should open with full story content
- ✓ Should display author and date
- ✓ Modal should close properly

### 7. Responsive Design Test
- Resize browser window from mobile (320px) to desktop (1920px)
- ✓ Layout should adapt smoothly
- ✓ Mobile menu should appear on small screens
- ✓ Grid columns should change: 1 → 2 → 3

### 8. Accessibility Test
- Navigate using keyboard only (Tab, Enter, Space, ESC)
- ✓ All interactive elements should be reachable
- ✓ Focus indicators should be visible
- ✓ Modals should trap focus appropriately

### 9. Production Build Test
```bash
pnpm build
pnpm preview
```
✓ Should build without TypeScript errors
✓ Preview should work identically to dev mode

## 📊 Features Matrix

| Feature | Specified | Implemented | Notes |
|---------|-----------|-------------|-------|
| Home page with hero | ✅ | ✅ | Gradient background with welcoming message |
| Countdown timer | ✅ | ✅ | Real-time updates, counts to Jan 1, 2027 |
| Featured traditions | ✅ | ✅ | 3 cards displayed on home page |
| Traditions page | ✅ | ✅ | 10 traditions with full details |
| Region filter | ✅ | ✅ | 5 regions + All option |
| Responsive grid | ✅ | ✅ | 1-3 columns based on screen size |
| Events page | ✅ | ✅ | 8 events with clickable cards |
| Event details modal | ✅ | ✅ | Full details with formatted date |
| Stories page | ✅ | ✅ | 5 stories with excerpts |
| Read more interaction | ✅ | ✅ | Opens full story in modal |
| About page | ✅ | ✅ | Purpose and cultural significance |
| Top navigation | ✅ | ✅ | Sticky header with active states |
| Footer | ✅ | ✅ | Copyright and tagline |
| Mobile responsive | ✅ | ✅ | Mobile-first design |
| Semantic HTML | ✅ | ✅ | Proper use of nav, main, footer, article |
| Keyboard navigation | ✅ | ✅ | Full keyboard support |
| ARIA labels | ✅ | ✅ | Applied to interactive elements |
| TypeScript strict mode | ✅ | ✅ | No `any` types used |
| Mock data | ✅ | ✅ | Fully typed data in src/data/ |

## 🚫 Non-Implemented Features (As Specified)

Per the specification, the following were **intentionally NOT implemented**:
- ❌ User authentication
- ❌ Payment or ticket booking
- ❌ Real-time backend APIs
- ❌ Internationalization (i18n)

## 🎨 Design Highlights

- **Color Scheme**: Gold (`#D4AF37`), Red (`#FF6B6B`), Dark Navy (`#1a1a2e`)
- **Typography**: Georgia for headings, Inter for body text
- **Visual Elements**: Gradient backgrounds, emoji icons, card-based layouts
- **Animations**: Smooth transitions, hover effects, shadow depth changes

## 🔧 Known Limitations

None. All features specified in `input_ui_spec.txt` have been fully implemented.

## 📄 License

Copyright © 2025 New Year Cultural Website. All rights reserved.

## 🙏 Acknowledgments

This project celebrates cultural traditions from around the world. All tradition descriptions, event information, and stories are for educational and informational purposes.

---

**Built with ❤️ and TypeScript** | **Powered by React & Tailwind CSS**
