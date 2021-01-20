import React from 'react'
import {Link} from "gatsby"

const CategoryTile = ({ icon, title, size, url }) => {

  return (
    <Link to={url} >
      <div className="category__tile"
        style={{ width: size, height: size }}
      >
        <img className="category__tile__icon"
          src={icon}
          alt="icon" />
        <div>
          <div className="category__tile__border"></div>
          <h4 className="category__tile__title">{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default CategoryTile
