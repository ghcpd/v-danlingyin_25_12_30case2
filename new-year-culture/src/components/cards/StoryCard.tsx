import { useState } from 'react';
import { Story } from '../../types';
import { cn } from '../../utils';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { title, excerpt, content, author, publishDate, readTime, imageUrl } = story;

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-festive-midnight flex items-center justify-center">
            <span className="text-6xl" role="img" aria-hidden="true">
              📖
            </span>
          </div>
        )}
        {/* Read Time Badge */}
        {readTime && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readTime} min read
          </span>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
          {author && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {author}
            </span>
          )}
          {publishDate && (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {publishDate}
            </span>
          )}
        </div>

        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-festive-red transition-colors">
          {title}
        </h3>

        {/* Excerpt or Full Content */}
        <div
          className={cn(
            'text-gray-600 text-sm leading-relaxed transition-all duration-300',
            !isExpanded && 'line-clamp-3'
          )}
        >
          {isExpanded ? (
            <div className="space-y-4 whitespace-pre-line">{content}</div>
          ) : (
            excerpt
          )}
        </div>

        {/* Read More Button */}
        <button
          type="button"
          onClick={toggleExpanded}
          className="mt-4 inline-flex items-center gap-2 text-festive-red hover:text-festive-midnight font-medium text-sm transition-colors focus:outline-none focus:underline"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? `Show less about ${title}` : `Read more about ${title}`}
        >
          {isExpanded ? (
            <>
              Show Less
              <svg
                className="w-4 h-4 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          ) : (
            <>
              Read More
              <svg
                className="w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
