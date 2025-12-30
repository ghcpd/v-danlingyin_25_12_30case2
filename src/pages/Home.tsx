import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import TraditionCard from '../components/TraditionCard';
import { traditions } from '../data/traditions';

const Home = () => {
  const featuredTraditions = traditions.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-new-year-dark via-purple-900 to-new-year-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Welcome to 2026! 🎊
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover how cultures around the world celebrate the New Year
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-heading text-center mb-8">
              Countdown to New Year 2027
            </h2>
            <CountdownTimer />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/traditions"
              className="inline-block bg-new-year-primary text-new-year-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Explore Traditions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Traditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-new-year-dark mb-12">
            Featured New Year Traditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTraditions.map((tradition) => (
              <TraditionCard key={tradition.id} tradition={tradition} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/traditions"
              className="text-new-year-primary hover:text-new-year-secondary font-semibold text-lg"
            >
              View All Traditions →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/events"
              className="bg-gradient-to-br from-new-year-primary to-yellow-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">🎆</div>
              <h3 className="text-2xl font-heading font-bold mb-2">Events</h3>
              <p>Discover New Year celebrations worldwide</p>
            </Link>
            <Link
              to="/stories"
              className="bg-gradient-to-br from-new-year-secondary to-red-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-heading font-bold mb-2">Stories</h3>
              <p>Read cultural tales and histories</p>
            </Link>
            <Link
              to="/about"
              className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">ℹ️</div>
              <h3 className="text-2xl font-heading font-bold mb-2">About</h3>
              <p>Learn about this website</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
