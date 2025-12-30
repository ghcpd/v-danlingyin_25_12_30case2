const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-heading font-bold text-center text-new-year-dark mb-8">
          About This Website
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-heading font-bold text-new-year-dark mb-4">
              Our Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to the New Year Cultural Website, a digital celebration of how diverse cultures 
              around the world welcome the new year. Our mission is to connect people through the 
              shared human experience of new beginnings, while honoring the unique traditions that 
              make each culture special.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-new-year-dark mb-4">
              The Significance of New Year
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              The celebration of the new year is one of humanity's oldest and most universal traditions. 
              While the specific date and customs vary across cultures, the fundamental themes remain 
              constant: reflection on the past, hope for the future, and renewal of spirit.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From ancient Babylonian promises to the gods, to modern resolutions and midnight 
              countdowns, New Year celebrations represent our collective desire to mark time, honor 
              cycles, and embrace fresh starts. These traditions connect us across millennia and 
              continents, reminding us that despite our differences, we share common hopes and dreams.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-new-year-dark mb-4">
              What You'll Find Here
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-new-year-primary mb-2">🎊 Traditions</h3>
                <p className="text-gray-700">
                  Discover unique New Year customs from cultures around the world, from eating 
                  twelve grapes in Spain to first-footing in Scotland.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-new-year-primary mb-2">🎆 Events</h3>
                <p className="text-gray-700">
                  Explore major New Year celebrations and gatherings, from Sydney's spectacular 
                  fireworks to Times Square's iconic ball drop.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-new-year-primary mb-2">📖 Stories</h3>
                <p className="text-gray-700">
                  Read fascinating tales and historical accounts that explain the origins and 
                  meanings behind our New Year traditions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-new-year-primary mb-2">⏱️ Countdown</h3>
                <p className="text-gray-700">
                  Track the time until the next New Year with our real-time countdown timer, 
                  building anticipation for the celebration ahead.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-new-year-dark mb-4">
              Join the Celebration
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you're planning your own New Year's celebration, researching cultural traditions, 
              or simply curious about how others mark this special occasion, we hope this website 
              inspires you to embrace the spirit of renewal and global community. Here's to new 
              beginnings, cultural understanding, and the shared joy of welcoming a fresh start!
            </p>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-2xl font-heading text-new-year-primary">
              Happy New Year! 🎉
            </p>
            <p className="text-gray-600 mt-2">
              May your year be filled with joy, prosperity, and wonderful discoveries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
