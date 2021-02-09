import React from 'react'

const Note = ({note, toggleImportance}) => {
  return (
    <li className="note"> 
      {note.content} 
      <button onClick={toggleImportance}> Mark {note.important ? "not important" : "important"}</button>
    </li>
    
  )
}

export default Note