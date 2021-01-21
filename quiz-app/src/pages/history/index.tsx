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
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.historyImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <BackButton />
        <Heading text="WYBRANA KATEGORIA:" category="history" />
        <CategoryChosen icon={history} title="HISTORIA" size="200px" />
        <StartButton url="/history/quiz" text="ROZPOCZNIJ"/>
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