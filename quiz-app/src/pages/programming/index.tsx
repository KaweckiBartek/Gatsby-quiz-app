import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryChosen from '../../components/categories/CategoryChosen'
import programing from '../../images/icons/programowanie_ikona.svg'
import StartButton from '../../components/buttons/StartButton'

const Programming = () => {
  return (
    <div className="home">
      <Header />
      <BackButton />
      <Heading text="WYBRANA KATEGORIA:" />
      <CategoryChosen icon={programing} title="PROGRAMOWANIE" size="200px" />
      <StartButton />

    </div>
  )
}

export default Programming
