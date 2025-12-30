import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import Modal from '../components/Modal';
import { stories } from '../data/stories';
import { Story } from '../types';

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleReadMore = (story: Story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold text-center text-new-year-dark mb-4">
          Cultural Stories
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Dive into the rich history and fascinating tales behind New Year traditions
        </p>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story) => (
            <StoryCard 
              key={story.id} 
              story={story} 
              onReadMore={() => handleReadMore(story)}
            />
          ))}
        </div>

        {/* Story Detail Modal */}
        <Modal
          isOpen={selectedStory !== null}
          onClose={handleCloseModal}
          title={selectedStory?.title || ''}
        >
          {selectedStory && (
            <article className="prose prose-lg max-w-none">
              {selectedStory.author && (
                <div className="text-sm text-gray-600 mb-4 not-prose">
                  <p>
                    By <span className="font-semibold">{selectedStory.author}</span>
                    {selectedStory.date && (
                      <span> • {new Date(selectedStory.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    )}
                  </p>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-new-year-primary to-new-year-secondary h-2 w-20 mb-6 rounded-full"></div>
              
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedStory.content}
              </p>
            </article>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Stories;
