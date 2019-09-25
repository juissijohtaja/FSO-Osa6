import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    props.store.dispatch(
      createAnecdote(content)
    )
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm