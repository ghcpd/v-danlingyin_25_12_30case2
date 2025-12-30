import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

export const StoryCard = ({ story, onClick }: StoryCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden bg-gray-200">
        {story.imageUrl ? (
          <img
            src={story.imageUrl}
            alt={story.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            📖
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-xs text-gray-500 mb-2">
          {formatDate(story.date)}
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
          {story.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {story.excerpt}
        </p>
        <button
          onClick={onClick}
          className="text-primary-600 font-medium hover:text-primary-700 focus:outline-none focus:underline transition-colors"
          aria-label={`Read more about ${story.title}`}
        >
          Read more →
        </button>
      </div>
    </article>
  );
};
