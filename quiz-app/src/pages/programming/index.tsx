import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryTile from '../../components/categories/CategoryTile'

const Programming = () => {
  return (
    <div className="home">
      <Header />
      <BackButton />
      <Heading text="WYBRANA KATEGORIA:" />
      <CategoryTile />

    </div>
  )
}

export default Programming
