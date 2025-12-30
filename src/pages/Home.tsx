import { Link } from 'react-router-dom';
import { CountdownTimer } from '../components/CountdownTimer';
import { TraditionCard } from '../components/TraditionCard';
import { traditions } from '../data/traditions';

export const Home = () => {
  const featuredTraditions = traditions.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-festive-red text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            🎉 Welcome to New Year Celebrations 🎊
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Discover the rich tapestry of New Year traditions from around the world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/traditions"
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Explore Traditions
            </Link>
            <Link
              to="/events"
              className="bg-primary-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Featured Traditions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured New Year Traditions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore how different cultures celebrate the arrival of a new year with unique customs and rituals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {featuredTraditions.map((tradition) => (
              <TraditionCard key={tradition.id} tradition={tradition} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/traditions"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              View All Traditions →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Celebrate Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Global Traditions
              </h3>
              <p className="text-gray-600">
                Discover how people from different cultures welcome the new year with unique celebrations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎆</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Amazing Events
              </h3>
              <p className="text-gray-600">
                Explore spectacular New Year events happening around the world
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Cultural Stories
              </h3>
              <p className="text-gray-600">
                Read fascinating stories about New Year customs and their historical significance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-festive-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Start Your Cultural Journey
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Learn about the beautiful diversity of New Year celebrations worldwide
          </p>
          <Link
            to="/about"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};
