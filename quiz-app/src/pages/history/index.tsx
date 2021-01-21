import React from 'react'
import Header from '../../components/heading/Header'
import Heading from '../../components/heading/Heading'
import BackButton from "../../components/buttons/BackButton"
import CategoryChosen from '../../components/categories/CategoryChosen'
import history from '../../images/icons/historia_ikona.svg'
import StartButton from '../../components/buttons/StartButton'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"


const History = (props) => {
  const category = "history"
  const kategoria = "HISTORIA"

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.historyImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading category={category} text="WYBRANA KATEGORIA:"/>
        <CategoryChosen icon={history} title={kategoria} size="200px" />
        <StartButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ"/>
      </BackgroundImage>
    </div>
  )
}

export default History

export const historyQuery = graphql`
  query{
    historyImage: file(relativePath: {eq: "backgrounds/history/home.png"}) {
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