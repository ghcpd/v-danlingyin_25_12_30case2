import { useState } from 'react';
import { TraditionCard } from '../components/TraditionCard';
import { traditions } from '../data/traditions';
import { Region } from '../types';

export const Traditions = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');

  const regions: Region[] = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

  const filteredTraditions = selectedRegion === 'All'
    ? traditions
    : traditions.filter(tradition => tradition.region === selectedRegion);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            New Year Traditions Around the World
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the diverse ways cultures celebrate the new year, from ancient customs to modern festivities
          </p>
        </div>

        {/* Filter by Region */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <label htmlFor="region-filter" className="sr-only">
              Filter traditions by region
            </label>
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by region">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    selectedRegion === region
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                  aria-pressed={selectedRegion === region}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary-600">{filteredTraditions.length}</span> tradition{filteredTraditions.length !== 1 ? 's' : ''}
            {selectedRegion !== 'All' && ` from ${selectedRegion}`}
          </p>
        </div>

        {/* Traditions Grid */}
        {filteredTraditions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTraditions.map((tradition) => (
              <TraditionCard key={tradition.id} tradition={tradition} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600">
              No traditions found for this region.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
