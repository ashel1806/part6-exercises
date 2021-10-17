import React from "react"
import { connect } from 'react-redux'
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotificaction } from "../reducers/notificationReducer"

import Anecdote from './Anecdote'

const AnecdoteList = (props) => {

  const vote = id => {
    const anecdoteToVote = props.anecdotes.find(a => a.id === id)
    props.setNotificaction(`you voted ${anecdoteToVote.content}`, 5)
    props.voteAnecdote(anecdoteToVote.id, anecdoteToVote)
  }

  let filteredAnecdotes = props.anecdotes.filter(a => 
     a.content
      .toLocaleLowerCase()
      .indexOf(props.filter.toLocaleLowerCase()) !== -1
  )
  return (
    <>
      {filteredAnecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            vote(anecdote.id)
          }
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  setNotificaction,
  voteAnecdote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
