import { url } from 'inspector'
import React from 'react'
import buttonProgramming from "../../images/icons/button_programowanie_01.svg"
// import buttonHistory from "../../images/icons/button_programowanie_01.svg"
// import buttonTechnology from "../../images/icons/button_programowanie_01.svg"
// import buttonAutomotive from "../../images/icons/button_programowanie_01.svg"
// import buttonCulture from "../../images/icons/button_programowanie_01.svg"

const StartButton = () => {
  return (
    <div className="start__button">
      <img src={buttonProgramming} alt="start-button"/>
    </div>
  )
}

export default StartButton
