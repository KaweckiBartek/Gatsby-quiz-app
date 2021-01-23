import { Link } from 'gatsby'
import React from 'react'
import Q from '../../images/logo/Q.png'

const QLogo = () => {
  return (
    <Link to="/">
      <img src={Q} className="q__logo" />
    </Link>
  )
}

export default QLogo
