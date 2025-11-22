import { Link } from 'react-router-dom';

export default function DeckListPage({ decks }) {
  return (
    <section>
      <h2>All Decks</h2>
      <ul className="deck-list">
        {decks.map(deck => (
          <li key={deck.id} className="deck-card">
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <p><strong>Course:</strong> {deck.course}</p>
            <Link to={`/decks/${deck.id}`}>Open deck</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
