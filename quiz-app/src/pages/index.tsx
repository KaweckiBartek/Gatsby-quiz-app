import React from 'react'
import '../styles/themes/default/theme.scss';
import Header from '../components/heading/Header'
import Heading from '../components/heading/Heading'
import Categories from '../components/categories'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Heading text="10 PYTAŃ / 5 KATEGORII"/>
      <Categories />
    </div>
  )
}

export default Home

