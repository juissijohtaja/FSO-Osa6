import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: 'green',
    color: 'white'
  }

  const notificationDisplay = props.store.getState().notification

  return (
    <div>
      {notificationDisplay === null ? null : <div style={style}>{ notificationDisplay }</div>}
    </div>
  )
}

export default Notification