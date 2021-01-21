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
  const category = "programming"
  const kategoria = "PROGRAMOWANIE"
  
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.programmingImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading category={category} text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={programing} title={kategoria} size="200px" />
        <StartButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ" />
      </BackgroundImage>
    </div>
  )
}

export default Programming

export const programmingQuery = graphql`
  query{
    programmingImage: file(relativePath: {eq: "backgrounds/programming/home.png"}) {
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