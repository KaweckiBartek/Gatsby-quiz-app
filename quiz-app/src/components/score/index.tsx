import React, { useContext } from 'react'
import {ScoreCtx} from "../../context"

const Score = ({ category }) => {
  const { score } = useContext(ScoreCtx)
  
  return (
    <div className="score">
      <div className="heading__header__wrapper">
        <div className={`heading__header heading__${category}`}>
        </div>
        <h3 className="heading__header__text">TWÓJ WYNIK</h3>
      </div>
      <div className={`score__result score__result__${category}`}>
        <h2 className="score__result__text">{ score }/10</h2>
      </div>
    </div>
  )
}

export default Score
