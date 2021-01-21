import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryChosen from '../../components/categories/CategoryChosen'
import technology from '../../images/icons/technologia_ikona_.svg'
import StartButton from '../../components/buttons/StartButton'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const Technology = (props) => {
  const category = "technology"
  const kategoria = "TECHNOLOGIA"
  
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.technologyImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading category={category} text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={technology} title={kategoria} size="200px" />
        <StartButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ" />
      </BackgroundImage>
    </div>
  )
}

export default Technology

export const technologyQuery = graphql`
  query{
    technologyImage: file(relativePath: {eq: "backgrounds/tech/home.png"}) {
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