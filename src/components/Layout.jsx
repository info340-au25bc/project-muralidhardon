import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <header className="top-nav">
        <h1>Husky Flashcards</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/decks">Decks</Link>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="site-footer">
        <small>&copy; 2025 Husky Flashcards</small>
      </footer>
    </div>
  );
}
