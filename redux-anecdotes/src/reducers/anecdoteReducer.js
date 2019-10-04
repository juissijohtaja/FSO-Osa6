import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const updatedAnecdote = action.data
      const id = action.data.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    anecdote.votes += 1
    const updatedAnecdote = await anecdoteService.updateContent(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote 
    })
    
  }
}

export default anecdoteReducer