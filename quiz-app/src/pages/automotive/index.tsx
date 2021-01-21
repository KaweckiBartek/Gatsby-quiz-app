import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryChosen from '../../components/categories/CategoryChosen'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import StartButton from '../../components/buttons/StartButton'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Automotive = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.automotiveImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading category="automotive" text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={automotive} title="MOTORYZACJA" size="200px" />
        <StartButton category="automotive" url="/automotive/quiz" text="ROZPOCZNIJ"/>
      </BackgroundImage>
    </div>
  )
}

export default Automotive

export const automotiveQuery = graphql`
  query{
    automotiveImage: file(relativePath: {eq: "backgrounds/moto/home.png"}) {
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