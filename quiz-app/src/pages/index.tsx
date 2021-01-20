import React from 'react'
import '../styles/themes/default/theme.scss';
import Header from '../components/heading/Header'
import QLogo from '../components/logo/QLogo'
import QUIZLogo from '../components/logo/QUIZLogo'
import Categories from '../components/categories'
import CloseButton from '../components/buttons/closeButton';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <QLogo />
        <QUIZLogo />
        <CloseButton />
      </div>
      <Categories />
    </div>
  )
}

export default Home
