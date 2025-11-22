import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function DeckDetailPage({ decks }) {
  const { deckId } = useParams();
  const deck = decks.find(d => d.id === deckId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!deck) {
    return <p>Deck not found.</p>;
  }

  const currentCard = deck.cards[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex(prev => (prev + 1) % deck.cards.length);
  };

  const handleToggleAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <section>
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>

      <div className="card-view" aria-live="polite">
        <p><strong>Question:</strong> {currentCard.question}</p>

        {showAnswer && (
          <p><strong>Answer:</strong> {currentCard.answer}</p>
        )}

        <div className="card-controls">
          <button type="button" onClick={handleToggleAnswer}>
            {showAnswer ? 'Hide answer' : 'Show answer'}
          </button>
          <button type="button" onClick={handleNext}>
            Next card
          </button>
        </div>

        <p>
          Card {currentIndex + 1} of {deck.cards.length}
        </p>
      </div>
    </section>
  );
}
