import { Tradition } from '../types';

interface TraditionCardProps {
  tradition: Tradition;
}

export const TraditionCard = ({ tradition }: TraditionCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden bg-gray-200">
        {tradition.imageUrl ? (
          <img
            src={tradition.imageUrl}
            alt={tradition.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🎉
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-heading font-bold text-gray-900">
            {tradition.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {tradition.country}
          </span>
          <span className="text-sm text-gray-500">
            {tradition.region}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {tradition.description}
        </p>
      </div>
    </article>
  );
};
