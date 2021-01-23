import React from 'react'
import history from '../../images/icons/historia_ikona.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';

const { Header, Heading, CategoryChosen, MainButton } = SharedComponents;


const History = (props) => {
  const category = "history"
  const kategoria = "HISTORIA"

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.historyImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <Heading category={category} text="WYBRANA KATEGORIA:"/>
        <CategoryChosen icon={history} title={kategoria} size="200px" />
        <MainButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ"/>
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