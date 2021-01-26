import { Link } from 'gatsby'
import React from 'react'
import Q from '../../images/logo/Q.png'

const QLogo = () => {
  return (
    <Link to="/">
      <img src={Q} alt="logo" className="q-logo" />
    </Link>
  )
}

export default QLogo
