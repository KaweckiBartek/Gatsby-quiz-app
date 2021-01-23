import React from 'react'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';

const { Header, Heading, CategoryChosen, MainButton } = SharedComponents;

const Automotive = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.automotiveImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <Heading category="automotive" text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={automotive} title="MOTORYZACJA" size="200px" />
        <MainButton category="automotive" url="/automotive/quiz" text="ROZPOCZNIJ"/>
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