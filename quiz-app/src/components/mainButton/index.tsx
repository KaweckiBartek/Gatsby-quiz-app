import { Link } from 'gatsby'
import React from 'react'
import playIcon from '../../images/icons/button_strzałka_plus.svg'
import { IMainButton } from '../../types'

const MainButton = ({ url, text, category }: IMainButton) => {
  return (
    <Link to={url}>
      <div className={`main-button main-button__${category}` }>
        <h4 className="main-button__text">{text}</h4>
        <img className="main-button__icon" src={playIcon} alt="play-icon" />
      </div>
    </Link>
  )
}

export default MainButton
