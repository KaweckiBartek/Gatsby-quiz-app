import React from 'react'
import QLogo from './QLogo'
import QUIZLogo from './QUIZLogo'
import NavButtons from './NavButtons';

const Header = ({backButton}) => {
  return (
    <div className="home__header">
      <QLogo />
      <QUIZLogo />
      <NavButtons {...{backButton}}/>
    </div>
  )
}

export default Header