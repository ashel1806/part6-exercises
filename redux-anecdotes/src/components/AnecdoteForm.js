import React from "react"
import { connect } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotificaction } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {

  const addAnecdote = async (e) => {
    e.preventDefault()

    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    
    props.setNotificaction(`you created ${content}`, 5)
    props.createAnecdote(content)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setNotificaction: value => {
      dispatch(setNotificaction(value))
    },
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
