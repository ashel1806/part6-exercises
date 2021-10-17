import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNewAnecdote = async (content) => {
  const object = { content, votes: 0 }
  const res = await axios.post(baseUrl, object)

  return res.data
}

const voteAnecdote = async (id, anecdote) => {
  const object = { ...anecdote, votes: anecdote.votes + 1 }
  const res = await axios.put(`${baseUrl}/${id}`, object)

  return res.data
}

export default {
  getAll,
  createNewAnecdote,
  voteAnecdote
}
