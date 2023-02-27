import React, { useState } from 'react';

function AggiungiTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '' && description.trim() === '') {
      return;
    }
    const newTask = { title, description };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm}>Aggiungi attività</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Titolo:
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Descrizione:
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <button type="submit">Aggiungi</button>
        </form>
      )}
    </div>
  );
}

export default AggiungiTask;
