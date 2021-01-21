import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryChosen from '../../components/categories/CategoryChosen'
import programing from '../../images/icons/programowanie_ikona.svg'
import StartButton from '../../components/buttons/StartButton'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Programming = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.programmingImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading category="programming" text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={programing} title="PROGRAMOWANIE" size="200px" />
        <StartButton category="programming" url="/programming/quiz" text="ROZPOCZNIJ"/>
      </BackgroundImage>
    </div>
  )
}

export default Programming

export const programmingQuery = graphql`
  query{
    programmingImage: file(relativePath: {eq: "backgrounds/programming/select.png"}) {
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