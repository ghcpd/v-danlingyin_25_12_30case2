import { useState, useMemo } from 'react';
import TraditionCard from '../components/TraditionCard';
import { traditions } from '../data/traditions';
import { Region } from '../types';

const Traditions = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');

  const regions: Region[] = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

  const filteredTraditions = useMemo(() => {
    if (selectedRegion === 'All') {
      return traditions;
    }
    return traditions.filter(tradition => tradition.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center text-new-year-dark mb-4">
          New Year Traditions
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore fascinating New Year customs and celebrations from different cultures around the globe
        </p>

        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Filter by Region
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedRegion === region
                    ? 'bg-new-year-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                aria-pressed={selectedRegion === region}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Traditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTraditions.map((tradition) => (
            <TraditionCard key={tradition.id} tradition={tradition} />
          ))}
        </div>

        {filteredTraditions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No traditions found for this region.
            </p>
          </div>
        )}

        <div className="mt-12 text-center text-gray-600">
          <p>Showing {filteredTraditions.length} of {traditions.length} traditions</p>
        </div>
      </div>
    </div>
  );
};

export default Traditions;
