import React from 'react'
import '../styles/themes/default/theme.scss';
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby";
import SharedComponents from "../components"
import Layout from '../layouts';

const {Header, Heading, Categories } = SharedComponents;

const Home = (props) => {
  return (
    <Layout>
      <BackgroundImage
        fluid={props.data.homeImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={false} />
        <Heading text="10 PYTAŃ / 5 KATEGORII" category="programming" />
        <Categories category="programming" />
      </BackgroundImage>
    </Layout>
  )
}

export default Home

export const homeQuery = graphql`
  query{
    homeImage: file(relativePath: {eq: "backgrounds/programming/home.png"}) {
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