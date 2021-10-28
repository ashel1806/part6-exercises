import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Statistics from './components/Statistics'

const store = createStore(reducer)

const App = () => {
  const isGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
    //console.log(store.getState())
  }

  const isBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const isOk = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const resetStats = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const { good, ok, bad } = store.getState()

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={isGood}>good</button> 
      <button onClick={isOk}>neutral</button> 
      <button onClick={isBad}>bad</button>
      <button onClick={resetStats}>reset stats</button>
      <h2>statistics</h2>
      <Statistics 
        isGood={good}
        isOk={ok}
        isBad={bad}
      />
      <div>Este es un nuevo div</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
