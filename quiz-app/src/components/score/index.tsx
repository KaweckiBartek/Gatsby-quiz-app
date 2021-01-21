import React from 'react'
import Heading from '../heading/Heading'

const Score = ({category}) => {
  return (
    <div className="score">
      <div className="heading__header__wrapper">
        <div className={`heading__header heading__${category}`}>
        </div>
        <h3 className="heading__header__text">TWÓJ WYNIK</h3>
      </div>
      <div className="score__result">
        <h2 className="score__result__text">10/10</h2>
      </div>
    </div>
  )
}

export default Score
