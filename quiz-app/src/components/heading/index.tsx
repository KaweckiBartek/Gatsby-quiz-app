import React from 'react'

const Heading = ({ text, category }) => {
  return (
    <div className="heading__header__wrapper">
      <div className={`heading__header heading__${category}`}>
      </div>
      <h3 className="heading__header__text">{text}</h3>
    </div>
  )
}

export default Heading
