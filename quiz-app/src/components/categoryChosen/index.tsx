import React from 'react'
import { ICategoryChosen } from '../../types'

const CategoryChosen = ({ icon, title, size }: ICategoryChosen) => {

  return (
      <div className="category-chosen"
        style={{ width: size, height: size }}
      >
        <img className="category-chosen__icon"
          src={icon}
          alt="icon" />
        <div>
          <div className="category-tile__border"></div>
          <h4 className="category-tile__title">{title}</h4>
        </div>
      </div>
  )
}

export default CategoryChosen