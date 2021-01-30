import React from 'react'
import QLogo from './QLogo'
import QUIZLogo from './QUIZLogo'
import NavButtons from './NavButtons';
import { IHeader } from '../../types';

const Header = ({backButton}: IHeader) => {
  return (
    <header className="header">
      <QLogo />
      <QUIZLogo />
      <NavButtons {...{backButton}}/>
    </header>
  )
}

export default Header