import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import anecdoteReducer, { initializeAnecdotes } from '../reducers/anecdoteReducer'
import notificactionReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteService from '../services/anecdotes'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificactionReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(initializeAnecdotes(anecdotes))
)

export default store


