import React from 'react'

const Heading = ({text, category}) => {
  return (
    <h3 className={`heading__header heading__${category}`}>{ text }</h3>
  )
}

export default Heading
