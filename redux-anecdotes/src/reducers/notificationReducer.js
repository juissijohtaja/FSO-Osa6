const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.notification
      case 'CLEAR_NOTIFICATION':
        return action.notification  
      default:
        return state
    }
}

export const notificationChange = notification => {
    return {
        type: 'SET_NOTIFICATION',
        notification,
    }
}

export const notificationClear = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        notification: null,
    }
}

export default notificationReducer