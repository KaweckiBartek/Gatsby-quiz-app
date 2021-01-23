import React from 'react'
import closeIcon from "../../images/icons/zamknij_x.svg"
import backIcon from "../../images/icons/cofnij_x.svg"

const NavButtons = ({backButton}) => {
  return (
    <div className="closeButton">
      <img src={closeIcon} alt="close-button"/>
     {backButton && <img src={backIcon} alt="close-button"/>}
    </div>
  )
}

export default NavButtons
