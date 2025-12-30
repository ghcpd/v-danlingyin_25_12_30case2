import { StoryCard } from '../../components';
import { stories } from '../../data';

export const StoriesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Cultural{' '}
            <span className="text-festive-gold">Stories</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Dive into fascinating stories about New Year traditions, their origins,
            and the cultural significance behind how we celebrate.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 sm:py-16" aria-label="Stories list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-festive-midnight">
                {stories.length}
              </span>{' '}
              stories to explore
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Highlight */}
      <section
        className="py-12 sm:py-16 bg-white"
        aria-labelledby="featured-story-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-festive-midnight to-purple-900 rounded-3xl p-8 sm:p-12 text-white text-center">
            <div className="text-5xl mb-6" role="img" aria-hidden="true">
              📚
            </div>
            <h2
              id="featured-story-heading"
              className="text-2xl sm:text-3xl font-display font-bold mb-4"
            >
              Stories Connect Us
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Throughout history, humans have passed down stories about New Year
              celebrations, teaching each generation about hope, renewal, and the
              importance of community. These narratives shape our understanding of
              time and tradition.
            </p>
            <div className="inline-flex items-center gap-2 text-festive-gold font-medium">
              <span>Read and discover</span>
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-gray-100" aria-label="Inspirational quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-display text-gray-900 italic">
            "For last year's words belong to last year's language. And next year's
            words await another voice."
          </blockquote>
          <cite className="block mt-4 text-gray-600 not-italic">
            — T.S. Eliot, "Four Quartets"
          </cite>
        </div>
      </section>
    </main>
  );
};
