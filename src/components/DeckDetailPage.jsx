// src/components/DeckDetailPage.jsx
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";

export default function DeckDetailPage({ decks, onAddCard }) {
  const { deckId } = useParams();

  const deck = useMemo(
    () => decks.find(d => d.id === deckId),
    [decks, deckId]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionInput, setQuestionInput] = useState("");
  const [answerInput, setAnswerInput] = useState("");

  if (!deck) {
    return <p className="error-text">Deck not found.</p>;
  }

  const cards = deck.cards ?? [];
  const hasCards = cards.length > 0;
  const currentCard = hasCards ? cards[currentIndex] : null;

  function handleNext() {
    if (!hasCards) return;
    setShowAnswer(false);
    setCurrentIndex(prev => (prev + 1) % cards.length);
  }

  function handlePrev() {
    if (!hasCards) return;
    setShowAnswer(false);
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
  }

  function handleFlip() {
    if (!hasCards) return;
    setShowAnswer(prev => !prev);
  }

  function handleAddCard(event) {
    event.preventDefault();
    const q = questionInput.trim();
    const a = answerInput.trim();
    if (!q || !a) return;

    const newCard = {
      id: Date.now().toString(),
      question: q,
      answer: a
    };

    onAddCard(deck.id, newCard);

    setQuestionInput("");
    setAnswerInput("");

    if (!hasCards) {
      setCurrentIndex(0);
      setShowAnswer(false);
    }
  }

  const cardList = cards.map(card => (
    <li key={card.id}>{card.question}</li>
  ));

  return (
    <section>
      <h2>{deck.name}</h2>
      <p className="deck-course">{deck.course}</p>
      {deck.description && <p style={{ marginBottom: "0.75rem" }}>{deck.description}</p>}

      <div className="study-section">
        <div
          className="flashcard"
          onClick={handleFlip}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleFlip();
            }
          }}
        >
          {!hasCards ? (
            <p>No cards yet. Add your first card below!</p>
          ) : (
            <>
              <p className="flip-hint">
                Card {currentIndex + 1} of {cards.length} — click to flip
              </p>
              <h3>{showAnswer ? "Answer" : "Question"}</h3>
              <p>{showAnswer ? currentCard.answer : currentCard.question}</p>
            </>
          )}
        </div>

        <div className="study-controls">
          <button
            type="button"
            className="secondary-button"
            onClick={handlePrev}
            disabled={!hasCards}
          >
            Previous
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={handleNext}
            disabled={!hasCards}
          >
            Next
          </button>
        </div>

        <div className="study-summary">
          <h3 style={{ fontSize: "0.95rem", marginBottom: "0.25rem" }}>
            Cards in this deck
          </h3>
          {cards.length === 0 ? (
            <p className="flip-hint">No cards yet.</p>
          ) : (
            <ul>{cardList}</ul>
          )}
        </div>
      </div>

      <section className="add-card-section">
        <h3 style={{ fontSize: "0.95rem", marginBottom: "0.35rem" }}>
          Add a new card
        </h3>
        <form onSubmit={handleAddCard} className="card-form">
          <label>
            Question
            <textarea
              value={questionInput}
              onChange={e => setQuestionInput(e.target.value)}
              required
            />
          </label>
          <label>
            Answer
            <textarea
              value={answerInput}
              onChange={e => setAnswerInput(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="primary-button">
            Add card
          </button>
        </form>
      </section>
    </section>
  );
}
