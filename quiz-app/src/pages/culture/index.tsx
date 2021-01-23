import React from 'react'
import culture from '../../images/icons/kultura_ikona.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';

const { Header, Heading, CategoryChosen, MainButton, NavButtons  } = SharedComponents;


const History = (props) => {
  const category = "culture"
  const kategoria = "KULTURA"

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.cultureImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={ true}/>
        <Heading category={category} text="WYBRANA KATEGORIA:"/>
        <CategoryChosen icon={culture} title={kategoria} size="200px" />
        <MainButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ"/>
      </BackgroundImage>
    </div>
  )
}

export default History

export const artQuery = graphql`
  query{
    cultureImage: file(relativePath: {eq: "backgrounds/art/home.png"}) {
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