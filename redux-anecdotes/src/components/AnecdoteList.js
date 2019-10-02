import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'

import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  return (
    <ul>
      {props.visibleAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            props.addVote(anecdote.id)
            props.notificationChange('Vote added')
            setTimeout(() => props.notificationClear(), 5000)
          }}
        />
      )}
    </ul>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  const anecdotesNew = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  return anecdotesNew.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    visibleAnecdotes: anecdotesToShow(state),
  }
}

const mapDispatchToProps = { addVote, notificationChange, notificationClear }

const ConnectedAnecdoteList = connect( mapStateToProps, mapDispatchToProps )(AnecdoteList)

export default ConnectedAnecdoteList