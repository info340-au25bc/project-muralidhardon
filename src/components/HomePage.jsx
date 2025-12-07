// src/components/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <h2>Welcome to Husky Flashcards</h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
        Build and study decks for your UW classes, with your own cards plus sample decks.
      </p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link to="/decks/new" className="primary-button">
          Create a new deck
        </Link>
        <Link to="/decks" className="secondary-button">
          Browse all decks
        </Link>
      </div>
    </section>
  );
}
