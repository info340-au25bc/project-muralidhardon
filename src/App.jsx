// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import DeckListPage from './components/DeckListPage';
import DeckDetailPage from './components/DeckDetailPage';
import NewDeckPage from './components/NewDeckPage';
import { subscribeToDecks, addDeck, addCard } from './firebaseHelpers';

function App() {
  const [decks, setDecks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    subscribeToDecks((data) => {
      setDecks(data);
      setLoading(false);
    });
  }, []);

  function handleCreateDeck(newDeck) {
    addDeck(newDeck).catch(err => console.error("Error adding deck:", err));
  }

  function handleAddCard(deckId, newCard) {
    addCard(deckId, newCard).catch(err => console.error("Error adding card:", err));
  }

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/decks" element={<DeckListPage decks={decks} />} />

        <Route
          path="/decks/new"
          element={<NewDeckPage onCreateDeck={handleCreateDeck} />}
        />

        <Route
          path="/decks/:deckId"
          element={<DeckDetailPage decks={decks} onAddCard={handleAddCard} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
