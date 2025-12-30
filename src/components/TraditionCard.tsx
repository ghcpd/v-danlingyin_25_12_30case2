import { Tradition } from '../types';

interface TraditionCardProps {
  tradition: Tradition;
}

const TraditionCard = ({ tradition }: TraditionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-new-year-primary to-new-year-secondary h-32 flex items-center justify-center">
        <span className="text-6xl" role="img" aria-label="Celebration icon">
          🎉
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-new-year-dark mb-2">
          {tradition.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          📍 {tradition.country} ({tradition.region})
        </p>
        <p className="text-gray-700 leading-relaxed">
          {tradition.description}
        </p>
      </div>
    </div>
  );
};

export default TraditionCard;
