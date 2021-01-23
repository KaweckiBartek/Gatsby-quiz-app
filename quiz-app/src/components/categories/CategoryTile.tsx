import React from 'react'
import {Link} from "gatsby"
import { ICategoryTile } from '../../types'

const CategoryTile = ({ icon, title, size, url, category }:ICategoryTile) => {

  return (
    <Link to={url} >
      <div className={`category-tile category-tile__${category}`}
        style={{ width: size, height: size }}
      >
        <img className="category-tile__icon"
          src={icon}
          alt="icon" />
        <div>
          <div className="category-tile__border"></div>
          <h4 className="category-tile__title">{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default CategoryTile
