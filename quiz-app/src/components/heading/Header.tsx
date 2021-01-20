import React from 'react'
import QLogo from '../../components/logo/QLogo'
import QUIZLogo from '../../components/logo/QUIZLogo'
import CloseButton from '../../components/buttons/closeButton';


const Header = () => {
  return (
    <div className="home__header">
      <QLogo />
      <QUIZLogo />
      <CloseButton />
    </div>
  )
}


export default Header
