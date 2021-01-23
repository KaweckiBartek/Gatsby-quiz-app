import React from 'react'
import technology from '../../images/icons/technologia_ikona_.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';
import Layout from '../../layouts';

const { Header, Heading, CategoryChosen, MainButton } = SharedComponents;

const Technology = (props) => {
  const category = "technology"
  const kategoria = "TECHNOLOGIA"
  
  return (
    <Layout>
      <BackgroundImage
        fluid={props.data.technologyImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <Heading category={category} text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={technology} title={kategoria} size="200px" />
        <MainButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ" />
      </BackgroundImage>
    </Layout>
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