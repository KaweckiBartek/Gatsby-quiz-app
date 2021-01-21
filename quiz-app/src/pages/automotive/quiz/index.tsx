import React from 'react'
import Header from '../../../components/heading/Header'
import Heading from '../../../components/heading/Heading'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Quiz = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.automotiveQuizImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <Heading category="automotive" text="SELECT THE CORRECT ANSWER"  />
      </BackgroundImage>
    </div>
  )
}

export default Quiz

export const automotiveQuery = graphql`
  query{
    automotiveQuizImage: file(relativePath: {eq: "backgrounds/programming/select.png"}) {
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