import React from 'react'
import  { useEffect } from 'react' 
import { connect } from 'react-redux'
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import { initializeNotes } from './reducers/noteReducer'

const App = (props) => {

  useEffect(() => {
    props.initializeNotes()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default connect(
  null, { initializeNotes }
)(App)