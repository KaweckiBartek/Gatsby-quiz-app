import React from 'react'
import technology from '../../images/icons/technologia_ikona_.svg'
import culture from '../../images/icons/kultura_ikona.svg'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import programing from '../../images/icons/programowanie_ikona.svg'
import history from '../../images/icons/historia_ikona.svg'
import CategoryTile from '../categories/CategoryTile'
import { IOtherCategories } from '../../types'


const OtherCategories = ({currentCategory, category} : IOtherCategories) => {
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

  const otherCategories = categories.filter((el)=> el.title !== currentCategory )
  
  return (
    <div className="other-categories">
        {otherCategories.map((tile) =>
          <CategoryTile key={tile.title} category={category} title={tile.title} icon={tile.icon} size="140px" url={ tile.url }/>)}
      </div>
  )
}

export default OtherCategories
