const initialState = {
  message: '',
  timeId: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        message: action.message,
        tId: action.tId
      }
    case 'HIDE_NOTIFICATION':
      return {
        message: '',
        tId: null
      }
    case 'CLEAR_NOTIFICATION':
      clearTimeout(state.tId)
      return {
        message: action.message,
        tId: action.tId
      }
    default: 
      return state
  }
}

export const setNotificaction = (message, time) => {
  return dispatch => {
    const timeToTextId = setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION'
      })
    }, time * 1000)

    dispatch({
      type: "CLEAR_NOTIFICATION",
      message,
      tId: timeToTextId
    })
    
    dispatch({
      type: 'SHOW_NOTIFICATION',
      message,
      tId: timeToTextId
    }) }
}

export default notificationReducer
