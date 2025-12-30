import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onReadMore: () => void;
}

const StoryCard = ({ story, onReadMore }: StoryCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-heading font-bold text-new-year-dark mb-3">
        {story.title}
      </h3>
      {story.author && (
        <p className="text-sm text-gray-600 mb-2">
          By {story.author} {story.date && `• ${new Date(story.date).toLocaleDateString()}`}
        </p>
      )}
      <p className="text-gray-700 leading-relaxed mb-4">
        {story.excerpt}
      </p>
      <button
        onClick={onReadMore}
        className="text-new-year-primary hover:text-new-year-secondary font-semibold transition-colors"
        aria-label={`Read more about ${story.title}`}
      >
        Read More →
      </button>
    </article>
  );
};

export default StoryCard;
