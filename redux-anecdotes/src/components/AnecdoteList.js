import React from 'react'
import Anecdote from './Anecdote'

import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
  return (
    <ul>
      {store.getState().sort((a, b) => b.votes - a.votes).map(note =>
        <Anecdote
          key={note.id}
          note={note}
          handleClick={() => store.dispatch(addVote(note.id)) }
        />
      )}
    </ul>
  )
}

export default AnecdoteList