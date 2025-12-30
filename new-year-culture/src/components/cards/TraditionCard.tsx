import { Tradition } from '../../types';
import { cn } from '../../utils';

interface TraditionCardProps {
  tradition: Tradition;
  variant?: 'default' | 'featured';
}

export const TraditionCard: React.FC<TraditionCardProps> = ({
  tradition,
  variant = 'default',
}) => {
  const { title, country, region, description, imageUrl } = tradition;

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
        variant === 'featured' && 'ring-2 ring-festive-gold'
      )}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} - ${country}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-festive-midnight to-purple-900 flex items-center justify-center">
            <span className="text-6xl" role="img" aria-hidden="true">
              🌍
            </span>
          </div>
        )}
        {/* Region Badge */}
        <span className="absolute top-3 right-3 px-3 py-1 bg-festive-gold text-festive-midnight text-xs font-semibold rounded-full">
          {region}
        </span>
        {/* Featured Badge */}
        {variant === 'featured' && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-festive-red text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <span role="img" aria-hidden="true">⭐</span>
            Featured
          </span>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg" role="img" aria-hidden="true">
            📍
          </span>
          <span className="text-sm text-gray-500 font-medium">{country}</span>
        </div>

        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-festive-red transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
};
