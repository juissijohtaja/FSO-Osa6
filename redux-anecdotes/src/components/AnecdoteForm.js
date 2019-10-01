import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    props.store.dispatch(createAnecdote(content))
    props.store.dispatch(notificationChange('Anectode added'))
    setTimeout(() => props.store.dispatch(notificationClear()), 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm