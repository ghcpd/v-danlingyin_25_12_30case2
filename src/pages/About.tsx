export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            About New Year Celebrations
          </h1>
          <p className="text-lg text-gray-600">
            Connecting cultures through the universal celebration of new beginnings
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          {/* Purpose Section */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Our Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The New Year Cultural Website was created to celebrate and showcase the rich diversity of 
              New Year traditions from around the world. We believe that understanding how different 
              cultures mark this special occasion helps build bridges of cultural awareness and appreciation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide a comprehensive, accessible platform where people can explore, 
              learn about, and celebrate the many ways humanity welcomes a new year. From ancient customs 
              to modern festivities, we document the beautiful tapestry of global New Year celebrations.
            </p>
          </section>

          {/* Cultural Significance */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🌍</span>
              The Cultural Significance of New Year
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The New Year represents one of humanity's most universal celebrations, yet each culture 
                brings its own unique perspective and traditions to this momentous occasion. While the 
                specific date may vary across calendars, the themes of renewal, hope, and new beginnings 
                resonate universally.
              </p>
              <p>
                Historically, New Year celebrations have been deeply tied to agricultural cycles, 
                astronomical events, and religious observances. Ancient civilizations marked the new year 
                at different times - often coinciding with the spring equinox or harvest season. These 
                celebrations served as important communal events that reinforced social bonds and cultural identity.
              </p>
              <p>
                In modern times, New Year celebrations continue to evolve while maintaining connections to 
                traditional practices. Whether it's the spectacular fireworks displays in major cities, the 
                solemn temple visits in Japan, the vibrant street parties in Brazil, or the intimate family 
                gatherings in homes worldwide, New Year celebrations reflect both our shared humanity and our 
                beautiful diversity.
              </p>
              <p>
                The traditions we observe - from making resolutions to special foods, from countdown rituals 
                to symbolic gestures - all express our deepest hopes: for prosperity, health, happiness, and 
                good fortune in the year to come. These customs connect us to our ancestors and to each other, 
                reminding us that despite our differences, we all share the human desire to mark time's passage 
                and to approach the future with optimism.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">✨</span>
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Global Traditions</h3>
                <p className="text-gray-700 text-sm">
                  Explore New Year customs from every continent, learning about the unique ways different 
                  cultures welcome the new year.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Major Events</h3>
                <p className="text-gray-700 text-sm">
                  Discover spectacular New Year celebrations and countdown events happening around the world.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Cultural Stories</h3>
                <p className="text-gray-700 text-sm">
                  Read fascinating articles about the history, meaning, and evolution of New Year traditions.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-gray-900 mb-2">Live Countdown</h3>
                <p className="text-gray-700 text-sm">
                  Follow our real-time countdown to the next New Year and join the global celebration.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Message */}
          <section className="border-t border-gray-200 pt-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us in celebrating the diversity and unity of New Year traditions around the world. 
              Together, let's welcome each new year with understanding, appreciation, and hope for a 
              brighter future for all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
