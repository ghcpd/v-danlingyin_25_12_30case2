import { useState } from 'react';
import { StoryCard } from '../components/StoryCard';
import { Modal } from '../components/Modal';
import { stories } from '../data/stories';
import { Story } from '../types';

export const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 mb-4">
            New Year Cultural Stories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the fascinating history, traditions, and meanings behind New Year celebrations
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => setSelectedStory(story)}
            />
          ))}
        </div>
      </div>

      {/* Story Details Modal */}
      <Modal
        isOpen={selectedStory !== null}
        onClose={() => setSelectedStory(null)}
        title={selectedStory?.title || ''}
      >
        {selectedStory && (
          <div className="space-y-4">
            {selectedStory.imageUrl && (
              <img
                src={selectedStory.imageUrl}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <div className="text-sm text-gray-500">
              Published on {formatDate(selectedStory.date)}
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedStory.content}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
