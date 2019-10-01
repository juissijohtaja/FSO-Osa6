import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'


import { createAnecdote } from './reducers/anecdoteReducer'
//import { notificationChange } from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
})

const store = createStore(reducer)
console.log(store.getState())


store.subscribe(() => console.log(store.getState()))
//store.dispatch(notificationChange('kakka'))
store.dispatch(createAnecdote('combineReducers forms one reduces from many simple reducers'))

const renderApp = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)