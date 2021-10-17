import anecdoteService from '../services/anecdotes'

//const initialState = anecdotesAtStart.map(asObject)

//const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action.type)

  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW_ANECDOTE':
      return [
        ...state,
        action.data
      ]
    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    default: return state
  } 
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (id, content) => {
  return async dispatch => {
    const anecdoteVoted = await anecdoteService.voteAnecdote(id, content)
    dispatch({
      type: 'VOTE_ANECDOTE',
      data: anecdoteVoted
    })
  }
}

export default reducer
