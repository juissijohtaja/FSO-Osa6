import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    props.createAnecdote(content)
    props.notificationChange('Anectode added')
    setTimeout(() => props.notificationClear(), 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}


const mapDispatchToProps = { createAnecdote, notificationChange, notificationClear }

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm