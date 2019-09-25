import React from 'react'

const Anecdote = ({ note, handleClick }) => {
  return (
    <li key={note.id}>
          <div>
            {note.content}
          </div>
          <div>
            has {note.votes}
            <button onClick={handleClick}>vote</button>
          </div>
    </li>
  )
}

export default Anecdote