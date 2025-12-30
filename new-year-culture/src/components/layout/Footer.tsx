import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-display font-bold hover:text-festive-gold transition-colors"
            >
              <span className="text-2xl" role="img" aria-hidden="true">
                🎆
              </span>
              New Year Culture
            </Link>
            <p className="text-gray-300 text-sm">
              Celebrating New Year traditions and cultural stories from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-festive-gold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/traditions"
                  className="text-gray-300 hover:text-festive-gold transition-colors text-sm"
                >
                  Traditions
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-festive-gold transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/stories"
                  className="text-gray-300 hover:text-festive-gold transition-colors text-sm"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-festive-gold transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Cultural Message */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-festive-gold">
              A Global Celebration
            </h3>
            <p className="text-gray-300 text-sm">
              Every culture has unique ways of welcoming the new year. From fireworks to family
              gatherings, from traditional foods to ancient rituals, the new year brings people
              together worldwide.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} New Year Culture. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-pulse-slow" role="img" aria-label="Celebration">
              🎊
            </span>
            <span className="text-gray-400 text-sm">Happy New Year!</span>
            <span className="text-2xl animate-pulse-slow" role="img" aria-label="Celebration">
              🎉
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
