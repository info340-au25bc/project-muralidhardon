// src/firebaseHelpers.js
import { ref, push, set, onValue } from "firebase/database";
import { db } from "./firebaseConfig";

export function subscribeToDecks(callback) {
  const decksRef = ref(db, 'decks');
  onValue(decksRef, (snapshot) => {
    const data = snapshot.val() || {};
    callback(data);
  });
}

export function addDeck(newDeck) {
  const decksRef = ref(db, 'decks');
  const newDeckRef = push(decksRef);
  return set(newDeckRef, newDeck);
}

export function addCard(deckId, newCard) {
  const cardsRef = ref(db, `decks/${deckId}/cards`);
  const newCardRef = push(cardsRef);
  return set(newCardRef, newCard);
}
