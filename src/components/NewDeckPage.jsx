// src/components/NewDeckPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDeck } from "../firebaseHelpers";

export default function NewDeckPage() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedCourse = course.trim();

    if (!trimmedName || !trimmedCourse) {
      setError("Please enter at least a deck name and course.");
      return;
    }

    const slug =
      trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") ||
      "deck";
    const id = `${slug}-${Date.now().toString(36)}`;

    const newDeck = {
      id,
      name: trimmedName,
      course: trimmedCourse,
      description: description.trim(),
      cards: []
    };

    addDeck(newDeck)
      .then(() => navigate(`/decks/${id}`))
      .catch(err => setError("Error creating deck: " + err.message));
  }

  return (
    <section>
      <h2>Create a New Deck</h2>
      <p style={{ marginBottom: "0.75rem", color: "var(--text-muted)" }}>
        Make a deck for a new class or topic. You can add cards on the next
        page.
      </p>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-field">
          <label htmlFor="deck-name">Deck name</label>
          <input
            id="deck-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g., CSE 312 Midterm 2"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="deck-course">Course / tag</label>
          <input
            id="deck-course"
            type="text"
            value={course}
            onChange={e => setCourse(e.target.value)}
            placeholder="e.g., CSE 312"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="deck-description">Short description</label>
          <textarea
            id="deck-description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="What is this deck for?"
          />
        </div>

        <button type="submit" className="primary-button">
          Create deck
        </button>
      </form>
    </section>
  );
}
