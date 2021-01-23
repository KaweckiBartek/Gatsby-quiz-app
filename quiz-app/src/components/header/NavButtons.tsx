import React from 'react'
import closeIcon from "../../images/icons/zamknij_x.svg"
import backIcon from "../../images/icons/cofnij_x.svg"
import { IHeader } from '../../types'
import { Link } from 'gatsby'

const NavButtons = ({ backButton }: IHeader) => {
  return (
    <div className="nav-buttons">
      {backButton && <img className="nav-buttons__button" src={backIcon} alt="back-button" />}
      <Link to="/">
        <img className="nav-buttons__button" src={closeIcon} alt="close-button" />
      </Link>
    </div>
  )
}

export default NavButtons
