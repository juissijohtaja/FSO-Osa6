import React from 'react'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
          </div>
    </li>
  )
}

export default Anecdote