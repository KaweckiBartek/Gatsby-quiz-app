import React from 'react'
import Header from '../heading/Header'
import CategoryTile from './CategoryTile'
import technology from '../../images/icons/technologia_ikona_.svg'
import culture from '../../images/icons/kultura_ikona.svg'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import programing from '../../images/icons/programowanie_ikona.svg'
import history from '../../images/icons/historia_ikona.svg'


const Categories = () => {
  const categories = [
    {
      title: "TECHNOLOGIA",
      icon: technology,
    },
    {
      title: "KULTURA",
      icon: culture,
    },
    {
      title: "MOTORYZACJA",
      icon: automotive,
    },
    {
      title: "PROGRAMOWANIE",
      icon: programing,
    },
    {
      title: "HISTORIA",
      icon: history,
    },
  ]

  return (
    <div className="categories">
      <Header text="10 PYTAŃ / 5 KATEGORII" />
      <div className="categories__box">
        {categories.map((tile) => <CategoryTile title={tile.title} icon={ tile.icon} size="200px"/>)}
      </div>
    </div>
  )
}

export default Categories
