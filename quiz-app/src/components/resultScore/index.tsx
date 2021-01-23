import React, { useContext } from 'react'
import { ScoreCtx, useScore } from "../../context"

const ResultScore = ({ category }) => {
  const { score } = useScore()

  return (
    <ScoreCtx.Consumer>
      {context =>
        <div className="result-score">
          <div className="heading__wrapper">
            <div className={`heading heading__${category}`}>
            </div>
            <h3 className="heading__text">TWÓJ WYNIK</h3>
          </div>
          <div className={`result-score__result result-score__result__${category}`}>
            <h2 className="result-score__result__text">{score}/10</h2>
          </div>
        </div>}
    </ScoreCtx.Consumer>
  )
}

export default ResultScore
