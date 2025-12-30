import { Link } from 'react-router-dom';
import { CountdownTimer, TraditionCard } from '../../components';
import { getFeaturedTraditions } from '../../data';
import { getNextYear } from '../../utils';

export const HomePage: React.FC = () => {
  const featuredTraditions = getFeaturedTraditions();
  const nextYear = getNextYear();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-celebration overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 left-10 text-6xl animate-bounce-slow opacity-50">
            🎆
          </div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse-slow opacity-50">
            ✨
          </div>
          <div className="absolute bottom-20 left-1/4 text-4xl animate-sparkle opacity-50">
            🎊
          </div>
          <div className="absolute bottom-32 right-1/4 text-5xl animate-bounce-slow opacity-50">
            🎉
          </div>
          <div className="absolute top-1/3 left-1/3 text-3xl animate-pulse-slow opacity-30">
            ⭐
          </div>
          <div className="absolute top-1/2 right-1/3 text-4xl animate-sparkle opacity-40">
            🌟
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Celebrate{' '}
            <span className="text-festive-gold">New Year</span>{' '}
            <br className="hidden sm:block" />
            Traditions Worldwide
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Discover how cultures around the globe welcome the new year with unique
            customs, celebrations, and timeless traditions.
          </p>

          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/traditions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-festive-gold text-festive-midnight rounded-full font-semibold text-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-festive-gold/50 transition-all transform hover:scale-105"
            >
              Explore Traditions
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            >
              View Events
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg
            className="w-8 h-8 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Traditions Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-gray-50"
        aria-labelledby="featured-traditions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-festive-gold/10 text-festive-red rounded-full text-sm font-semibold mb-4">
              Featured Traditions
            </span>
            <h2
              id="featured-traditions-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4"
            >
              How the World Celebrates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From fireworks to feasts, discover the most beloved New Year traditions
              celebrated across different cultures.
            </p>
          </div>

          {/* Traditions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredTraditions.slice(0, 5).map((tradition) => (
              <TraditionCard
                key={tradition.id}
                tradition={tradition}
                variant="featured"
              />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/traditions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-festive-midnight text-white rounded-lg hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-festive-gold focus:ring-offset-2 transition-all font-medium"
            >
              View All Traditions
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-white"
        aria-labelledby="significance-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-1 bg-festive-red/10 text-festive-red rounded-full text-sm font-semibold mb-4">
                Cultural Significance
              </span>
              <h2
                id="significance-heading"
                className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6"
              >
                A Time for New Beginnings
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The New Year has been celebrated for over 4,000 years, marking the
                passage of time and the promise of fresh starts. From ancient Babylon
                to modern Times Square, humanity has always found ways to honor this
                special transition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether through fireworks, traditional foods, family gatherings, or
                quiet reflection, New Year celebrations remind us of our shared
                humanity and collective hope for the future.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-festive-red hover:text-festive-midnight font-semibold transition-colors"
              >
                Learn More About Our Mission
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Decorative Image Grid */}
            <div className="grid grid-cols-2 gap-4" aria-hidden="true">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-festive-gold to-yellow-400 rounded-2xl h-48 flex items-center justify-center text-6xl">
                  🎆
                </div>
                <div className="bg-gradient-to-br from-festive-red to-red-400 rounded-2xl h-32 flex items-center justify-center text-5xl">
                  🧧
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl h-32 flex items-center justify-center text-5xl">
                  🎊
                </div>
                <div className="bg-gradient-to-br from-festive-midnight to-blue-700 rounded-2xl h-48 flex items-center justify-center text-6xl">
                  🌍
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white"
        aria-labelledby="quick-links-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="quick-links-heading"
            className="text-2xl sm:text-3xl font-display font-bold text-center mb-12"
          >
            Explore More for {nextYear}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Events Card */}
            <Link
              to="/events"
              className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-4">🎆</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-festive-gold transition-colors">
                New Year Events
              </h3>
              <p className="text-white/70 text-sm">
                Discover celebrations happening around the world
              </p>
            </Link>

            {/* Stories Card */}
            <Link
              to="/stories"
              className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-festive-gold transition-colors">
                Cultural Stories
              </h3>
              <p className="text-white/70 text-sm">
                Read fascinating stories about New Year traditions
              </p>
            </Link>

            {/* About Card */}
            <Link
              to="/about"
              className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all sm:col-span-2 lg:col-span-1"
            >
              <div className="text-4xl mb-4">ℹ️</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-festive-gold transition-colors">
                About This Site
              </h3>
              <p className="text-white/70 text-sm">
                Learn about our mission to celebrate global cultures
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
