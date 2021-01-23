import React from 'react'
import QLogo from './QLogo'
import QUIZLogo from './QUIZLogo'
import NavButtons from './NavButtons';
import { IHeader } from '../../types';

const Header = ({backButton}: IHeader) => {
  return (
    <div className="header">
      <QLogo />
      <QUIZLogo />
      <NavButtons {...{backButton}}/>
    </div>
  )
}

export default Header