import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  return (
    <div>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>hyvä</button> 
      <button onClick={e => store.dispatch({ type: 'OK' })}>neutraali</button> 
      <button onClick={e => store.dispatch({ type: 'BAD' })}>huono</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
