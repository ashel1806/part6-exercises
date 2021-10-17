import React from "react"

const Statistics = ({ 
  isGood,
  isOk,
  isBad,

}) => {

  const all = isGood + isOk + isBad
  const average = (isGood - isBad) / all
  const positive = (isGood / all) * 100

  return all === 0
    ?  (<div>No feedback given</div>)
    : (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{isGood}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{isOk}</td>
        </tr>
         <tr>
          <td>bad</td>
          <td>{isBad}</td>
        </tr>     
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average || 0}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive || 0} %</td>
        </tr>
      </tbody>
    </table>
    )
}

export default Statistics
