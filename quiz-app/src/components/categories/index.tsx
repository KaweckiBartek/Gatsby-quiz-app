import React from 'react'
import CategoryTile from './CategoryTile'
import technology from '../../images/icons/technologia_ikona_.svg'
import culture from '../../images/icons/kultura_ikona.svg'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import programing from '../../images/icons/programowanie_ikona.svg'
import history from '../../images/icons/historia_ikona.svg'


const Categories = ({ category }) => {
  console.log(category);
  
  const categories = [
    {
      title: "TECHNOLOGIA",
      icon: technology,
      url:"/technology"
    },
    {
      title: "KULTURA",
      icon: culture,
      url: "/culture",
    },
    {
      title: "MOTORYZACJA",
      icon: automotive,
      url: "/automotive",
    },
    {
      title: "PROGRAMOWANIE",
      icon: programing,
      url: "/programming",
    },
    {
      title: "HISTORIA",
      icon: history,
      url: "/history",

    },
  ]

  return (
      <div className="categories">
        {categories.map((tile) =>
          <CategoryTile title={tile.title} icon={tile.icon} size="200px" url={tile.url} category={ category }/>)}
      </div>
  )
}

export default Categories
