import React from 'react'
import Anecdote from './Anecdote'

import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'


const AnecdoteList = ({ store }) => {
  return (
    <ul>
      {store.getState().anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            store.dispatch(addVote(anecdote.id))
            store.dispatch(notificationChange('Vote added'))
            setTimeout(() => store.dispatch(notificationClear()), 5000)
          }}
        />
      )}
    </ul>
  )
}

export default AnecdoteList