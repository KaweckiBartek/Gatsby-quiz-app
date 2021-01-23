import React from 'react'
import { IHeading } from '../../types'

const Heading = ({ text, category }: IHeading) => {
  return (
    <div className="heading__wrapper">
      <div className={`heading heading__${category}`}>
      </div>
      <h3 className="heading__text">{text}</h3>
    </div>
  )
}

export default Heading
