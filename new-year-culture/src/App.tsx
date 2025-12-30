import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const TraditionsPage = lazy(() =>
  import('./pages/TraditionsPage').then((module) => ({ default: module.TraditionsPage }))
);
const EventsPage = lazy(() =>
  import('./pages/EventsPage').then((module) => ({ default: module.EventsPage }))
);
const StoriesPage = lazy(() =>
  import('./pages/StoriesPage').then((module) => ({ default: module.StoriesPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-festive-gold border-t-transparent mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/traditions" element={<TraditionsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <main className="flex-1 flex items-center justify-center bg-gray-50 py-20">
                  <div className="text-center px-4">
                    <div className="text-8xl mb-6" role="img" aria-label="Not found">
                      🔍
                    </div>
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                      Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                      The page you're looking for doesn't exist or has been moved.
                    </p>
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-festive-midnight text-white rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-festive-gold focus:ring-offset-2 transition-all font-medium"
                    >
                      Go Home
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </a>
                  </div>
                </main>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
