import React from 'react'
import Header from '../../../components/heading/Header'
import Heading from '../../../components/heading/Heading'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Quiz = (props) => {
  const category = "technology"

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.technologySelect.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <Heading category={category} text="WYBRANA KATEGORIA:"  />
      </BackgroundImage>
    </div>
  )
}

export default Quiz

export const technologyQuery = graphql`
  query{
    technologySelect: file(relativePath: {eq: "backgrounds/tech/select.png"}) {
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