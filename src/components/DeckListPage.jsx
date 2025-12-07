// src/components/DeckListPage.jsx
import { Link } from "react-router-dom";

export default function DeckListPage({ decks }) {
  const deckItems = decks.map(deck => (
    <li key={deck.id} className="deck-card">
      <div className="deck-course">{deck.course}</div>
      <h3>{deck.name}</h3>
      {deck.description && <p>{deck.description}</p>}
      <Link to={`/decks/${deck.id}`} className="secondary-button">
        Open deck
      </Link>
    </li>
  ));

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "0.75rem",
          alignItems: "center",
          marginBottom: "1rem"
        }}
      >
        <h2 style={{ marginBottom: 0 }}>All Decks</h2>
        <Link to="/decks/new" className="primary-button">
          + Create deck
        </Link>
      </div>

      <ul className="deck-list">{deckItems}</ul>
    </section>
  );
}
