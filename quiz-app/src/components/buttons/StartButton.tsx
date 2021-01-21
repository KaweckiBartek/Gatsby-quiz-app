import { Link } from 'gatsby'
import React from 'react'
import playIcon from '../../images/icons/button_strzałka_plus.svg'

const StartButton = ({ url }) => {
  return (
    <Link to={url}>
      <div className="start__button">
        <h4 className="start__text">ROZPOCZNIJ</h4>
        <img className="start__icon" src={playIcon} alt="play-icon" />
      </div>
    </Link>
  )
}

export default StartButton
