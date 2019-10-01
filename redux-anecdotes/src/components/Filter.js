import React from 'react'
import { filterChange, filterClear } from '../reducers/filterReducer'


const Filter = (props) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    event.preventDefault()
    const filterValue = event.target.value
    props.store.dispatch(filterChange(filterValue))
  }
  const style = {
    marginBottom: 10
  }

  const handleClearFilter = (event) => {
    props.store.dispatch(filterClear())
    console.log('CLEAR FILTER',props.store.getState().filter)
    document.getElementById('anecdoteFilter').value = props.store.getState().filter
  }

  return (
    <div style={style}>
      filter <input id='anecdoteFilter' onChange={handleChange} /> 
      <button onClick={() => handleClearFilter()}>Clear filter</button>
    </div>
  )
}

export default Filter