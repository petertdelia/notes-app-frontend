import React, { useState } from 'react';

const NoteForm = ({addNote}) => {
  const [newNote, setNewNote] = useState(
    'A new note...'
  );

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const submitNote = (event) => {
    event.preventDefault();
    addNote({
      content: newNote,
      important: Math.random() > 0.5,
    });
    
    setNewNote("");
  }

  return (
    <div>
      <h2>Create a new Note</h2>

      <form onSubmit={submitNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;