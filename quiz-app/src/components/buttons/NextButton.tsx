import React from 'react'
import playIcon from '../../images/icons/button_strzałka_plus.svg'

const NextButton = ({nextQuestion, text, category }) => {
  return (
    <div
      onClick={nextQuestion}
      className={`start__button start__button__${category} next__button`}>
        <h4 className="start__text">{text}</h4>
        <img className="start__icon" src={playIcon} alt="play-icon" />
      </div>
  )
}

export default NextButton
