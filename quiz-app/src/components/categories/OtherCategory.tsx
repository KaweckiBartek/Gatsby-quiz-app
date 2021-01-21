import React from 'react'
import CategoryTile from './CategoryTile'
import technology from '../../images/icons/technologia_ikona_.svg'
import culture from '../../images/icons/kultura_ikona.svg'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import programing from '../../images/icons/programowanie_ikona.svg'
import history from '../../images/icons/historia_ikona.svg'


const OtherCategories = ({currentCategorry}) => {
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

  const otherCategories = categories.filter((el)=> el.title !== currentCategorry )
  
  return (
    <div className="other__categories">
        {otherCategories.map((tile) =>
          <CategoryTile title={tile.title} icon={tile.icon} size="140px" url={ tile.url }/>)}
      </div>
  )
}

export default OtherCategories
