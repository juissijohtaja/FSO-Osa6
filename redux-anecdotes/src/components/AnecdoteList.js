import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'

import { addVote } from '../reducers/anecdoteReducer'
import { notificationSet } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  return (
    <ul>
      {props.visibleAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => {
            props.addVote(anecdote)
            props.notificationSet(`You voted '${anecdote.content}'`, 3)
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
  console.log('STATE', state)
  return {
    visibleAnecdotes: anecdotesToShow( state ),
  }
}

const mapDispatchToProps = { addVote, notificationSet }

const ConnectedAnecdoteList = connect( mapStateToProps, mapDispatchToProps )(AnecdoteList)

export default ConnectedAnecdoteList