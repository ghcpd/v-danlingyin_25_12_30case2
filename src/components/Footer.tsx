export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-festive-gold">
              New Year Celebrations
            </h3>
            <p className="text-sm text-gray-300">
              Celebrating global New Year traditions and cultural heritage across the world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-festive-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/traditions" className="text-gray-300 hover:text-festive-gold transition-colors">
                  Traditions
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-festive-gold transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/stories" className="text-gray-300 hover:text-festive-gold transition-colors">
                  Stories
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-festive-gold transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-festive-gold">
              Connect
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Share your New Year traditions with us and celebrate cultural diversity.
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-festive-gold transition-colors" aria-label="Facebook">📘</span>
              <span className="text-2xl cursor-pointer hover:text-festive-gold transition-colors" aria-label="Twitter">🐦</span>
              <span className="text-2xl cursor-pointer hover:text-festive-gold transition-colors" aria-label="Instagram">📷</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} New Year Cultural Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
