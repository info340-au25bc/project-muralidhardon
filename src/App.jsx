// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import DeckListPage from './components/DeckListPage';
import DeckDetailPage from './components/DeckDetailPage';
import NewDeckPage from './components/NewDeckPage';
import { decks as initialDecks } from './data/flashcardsData';

function App() {
  const [decks, setDecks] = useState(initialDecks);

  function handleCreateDeck(newDeck) {
    setDecks(prev => [...prev, newDeck]);
  }

  function handleAddCard(deckId, newCard) {
    setDecks(prev =>
      prev.map(deck =>
        deck.id === deckId
          ? {
              ...deck,
              cards: [...(deck.cards ?? []), newCard]
            }
          : deck
      )
    );
  }

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
