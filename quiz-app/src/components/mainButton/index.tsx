import { Link } from 'gatsby'
import React from 'react'
import playIcon from '../../images/icons/button_strzałka_plus.svg'

const MainButton = ({ url, text, category }) => {
  return (
    <Link to={url}>
      <div className={`start__button start__button__${category}` }>
        <h4 className="start__text">{text}</h4>
        <img className="start__icon" src={playIcon} alt="play-icon" />
      </div>
    </Link>
  )
}

export default MainButton
