import React from 'react'

const CategoryChosen = ({ icon, title, size, }) => {

  return (
      <div className="category__chosen"
        style={{ width: size, height: size }}
      >
        <img className="category__chosen__icon"
          src={icon}
          alt="icon" />
        <div>
          <div className="category__tile__border"></div>
          <h4 className="category__tile__title">{title}</h4>
        </div>
      </div>
  )
}

export default CategoryChosen