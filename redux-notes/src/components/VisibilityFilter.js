import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const VisibilityFilter = (props) => {

  const filterClicked = (value) => {
    props.store.dispatch(filterChange(value))
  }

  return (
    <div>
      <input
        type="radio"
        name="filter"
        onChange={() => filterClicked('ALL')}
      /> all<br/>
      <input
        type="radio"
        name="filter"
        onChange={() => filterClicked('IMPORTANT')}
      /> important<br/>
      <input
        type="radio"
        name="filter"
        onChange={() => filterClicked('NONIMPORTANT')}
      /> nonimportant
    </div>
  )
}

export default VisibilityFilter