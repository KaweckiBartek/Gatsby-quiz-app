import React from 'react'
import Header from '../../../components/heading/Header'
import Heading from '../../../components/heading/Heading'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Quiz = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.historySelect.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <Heading text="WYBRANA KATEGORIA:" category="history" />
      </BackgroundImage>
    </div>
  )
}

export default Quiz

export const historyQuery = graphql`
  query{
    historySelect: file(relativePath: {eq: "backgrounds/history/select.png"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  }
`