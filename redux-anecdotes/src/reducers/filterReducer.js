const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.text
    default: return state
  }
}

export const filterChange = (content) => {
  return {
    type: 'SEARCH',
    text: content
  }
}

export default filterReducer
