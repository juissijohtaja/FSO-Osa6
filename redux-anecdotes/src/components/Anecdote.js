import React from 'react'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <li key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleVote}>vote</button>
          </div>
    </li>
  )
}

export default Anecdote