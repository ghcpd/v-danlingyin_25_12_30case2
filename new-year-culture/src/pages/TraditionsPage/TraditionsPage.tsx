import { useState, useMemo } from 'react';
import { TraditionCard } from '../../components';
import { traditions, filterTraditionsByRegion } from '../../data';
import { Region } from '../../types';
import { cn } from '../../utils';

const regions: Array<Region | 'all'> = [
  'all',
  'Asia',
  'Europe',
  'Americas',
  'Africa',
  'Oceania',
  'Middle East',
];

export const TraditionsPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');

  const filteredTraditions = useMemo(() => {
    return filterTraditionsByRegion(selectedRegion);
  }, [selectedRegion]);

  const handleRegionChange = (region: Region | 'all') => {
    setSelectedRegion(region);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-festive-midnight via-purple-900 to-festive-midnight text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            New Year{' '}
            <span className="text-festive-gold">Traditions</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Explore how different cultures around the world celebrate the new year
            with unique customs and cherished traditions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-40 bg-white shadow-sm py-4" aria-label="Filter traditions by region">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => handleRegionChange(region)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-festive-gold focus:ring-offset-2',
                  selectedRegion === region
                    ? 'bg-festive-midnight text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                aria-pressed={selectedRegion === region}
              >
                {region === 'all' ? 'All Regions' : region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Grid */}
      <section className="py-12 sm:py-16" aria-label="Traditions list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing{' '}
              <span className="font-semibold text-festive-midnight">
                {filteredTraditions.length}
              </span>{' '}
              tradition{filteredTraditions.length !== 1 ? 's' : ''}
              {selectedRegion !== 'all' && (
                <>
                  {' '}
                  from{' '}
                  <span className="font-semibold text-festive-midnight">
                    {selectedRegion}
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Grid */}
          {filteredTraditions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTraditions.map((tradition) => (
                <TraditionCard
                  key={tradition.id}
                  tradition={tradition}
                  variant={tradition.featured ? 'featured' : 'default'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4" role="img" aria-hidden="true">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No traditions found
              </h3>
              <p className="text-gray-600">
                Try selecting a different region to explore more traditions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cultural Note Section */}
      <section className="py-12 bg-white" aria-labelledby="cultural-note">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cultural-note"
            className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4"
          >
            Every Culture Has a Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            New Year traditions reflect the values, beliefs, and hopes of different
            cultures. From eating 12 grapes in Spain to watching the first sunrise
            in Japan, these customs connect us to our heritage and to each other.
            Understanding these traditions helps us appreciate the beautiful
            diversity of human celebration.
          </p>
        </div>
      </section>
    </main>
  );
};
