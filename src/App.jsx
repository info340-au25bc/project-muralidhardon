// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import DeckListPage from './components/DeckListPage';
import DeckDetailPage from './components/DeckDetailPage';
import { decks } from './data/flashcardsData';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DeckListPage decks={decks} />} />
        <Route path="/decks/:deckId" element={<DeckDetailPage decks={decks} />} />
      </Routes>
    </Layout>
  );
}

export default App;
