import { useState } from 'react';

function ListaTask({ tasks, onEditTask, onDeleteTask }) {
  const [editingTask, setEditingTask] = useState(null);

  const handleEditTask = (index, updatedTask) => {
    onEditTask(index, updatedTask);
    setEditingTask(null);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingTask === index ? (
            <div>
              <label htmlFor={`title-${index}`}>Titolo</label>
              <input id={`title-${index}`} type="text" defaultValue={task.title} />
              <label htmlFor={`description-${index}`}>Descrizione</label>
              <input id={`description-${index}`} type="text" defaultValue={task.description} />
              <button onClick={() => handleEditTask(index, {
                title: document.getElementById(`title-${index}`).value,
                description: document.getElementById(`description-${index}`).value,
              })}>Salva</button>
              <button onClick={() => setEditingTask(null)}>Annulla</button>
            </div>
          ) : (
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => setEditingTask(index)}>Modifica</button>
              <button onClick={() => onDeleteTask(index)}>Elimina</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListaTask;
