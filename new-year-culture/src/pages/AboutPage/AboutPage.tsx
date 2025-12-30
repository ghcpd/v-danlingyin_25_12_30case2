import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            About{' '}
            <span className="text-festive-gold">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Celebrating the rich tapestry of New Year traditions from every corner
            of the globe.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-festive-gold/10 text-festive-red rounded-full text-sm font-semibold mb-4">
              Our Mission
            </span>
            <h2
              id="mission-heading"
              className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6"
            >
              Bridging Cultures Through Celebration
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6 leading-relaxed">
              New Year Culture is dedicated to exploring and celebrating the diverse
              ways humanity welcomes new beginnings. Our mission is to foster cultural
              understanding and appreciation by showcasing New Year traditions from
              around the world.
            </p>
            <p className="mb-6 leading-relaxed">
              We believe that understanding how different cultures celebrate this
              universal milestone helps us connect with our shared humanity while
              appreciating our unique differences. From the fireworks of Sydney to
              the temple bells of Japan, from the grapes of Spain to the lanterns of
              China, each tradition tells a story of hope, renewal, and community.
            </p>
            <p className="leading-relaxed">
              Through this website, we aim to educate, inspire, and bring people
              together in the spirit of celebration that defines the new year across
              all cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section
        className="py-16 sm:py-20 bg-gray-50"
        aria-labelledby="significance-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-festive-red/10 text-festive-red rounded-full text-sm font-semibold mb-4">
              Cultural Significance
            </span>
            <h2
              id="significance-heading"
              className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6"
            >
              Why New Year Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Renewal */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-festive-gold/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  🌱
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Renewal & Fresh Starts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The new year represents a universal opportunity for fresh beginnings,
                allowing people to reflect on the past and set intentions for a better
                future.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-festive-red/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  👨‍👩‍👧‍👦
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Community & Togetherness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                New Year celebrations bring families and communities together, creating
                shared experiences and strengthening social bonds.
              </p>
            </div>

            {/* Hope */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  ⭐
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Hope & Optimism
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every new year carries the promise of new possibilities, inspiring hope
                and optimism for what the coming months may bring.
              </p>
            </div>

            {/* Heritage */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  🏛️
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Cultural Heritage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                New Year traditions pass down cultural values, beliefs, and practices
                from generation to generation, preserving our collective heritage.
              </p>
            </div>

            {/* Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  ⏰
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Marking Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrating the new year helps us mark the passage of time, giving
                structure and meaning to our lives and shared experiences.
              </p>
            </div>

            {/* Gratitude */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl" role="img" aria-hidden="true">
                  🙏
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Gratitude & Reflection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The turn of the year provides an opportunity to express gratitude for
                blessings received and reflect on lessons learned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="history-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-festive-midnight/10 text-festive-midnight rounded-full text-sm font-semibold mb-4">
              Historical Context
            </span>
            <h2
              id="history-heading"
              className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6"
            >
              4,000 Years of Celebration
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-festive-gold rounded-full flex items-center justify-center text-festive-midnight font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ancient Babylon (2000 BCE)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The earliest recorded New Year celebrations took place in ancient
                  Babylon with the 11-day Akitu festival, marking the new year during
                  the spring equinox.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-festive-red rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Roman Calendar Reform (46 BCE)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Julius Caesar introduced the Julian calendar, establishing January 1
                  as the first day of the year, named after Janus, the two-faced god
                  of beginnings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Gregorian Calendar (1582 CE)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pope Gregory XIII introduced the Gregorian calendar, which most of
                  the world uses today, refining the January 1 new year date.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-festive-midnight rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Modern Global Celebrations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, New Year is celebrated worldwide with a mix of ancient
                  traditions and modern festivities, from fireworks to family
                  gatherings to cultural rituals unique to each region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-display font-bold mb-6"
          >
            Explore the World's New Year Traditions
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to discover how cultures around the world celebrate? Browse our
            collection of traditions, events, and stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/traditions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-festive-gold text-festive-midnight rounded-full font-semibold text-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-festive-gold/50 transition-all"
            >
              Explore Traditions
            </Link>
            <Link
              to="/stories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            >
              Read Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
