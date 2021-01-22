import { Link } from 'gatsby'
import React from 'react'

const EndButton = ({ category }) => {
  return (
    <Link to={`/${category}/quiz/result`}>
      <div className={`start__button start__button__${category} end__button` }>
        <h4 className="start__text">ZAKOŃCZ</h4>
      </div>
    </Link>
  )
}

export default EndButton
