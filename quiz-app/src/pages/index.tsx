import React from 'react'
import '../styles/themes/default/theme.scss';
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby";
import SharedComponents from "../components"
import Layout from '../layouts';
import { Helmet } from "react-helmet"

const {Header, Heading, Categories } = SharedComponents;

const Home = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gatsby Quiz App</title>
        <link rel="canonical" href="https://gatsby-quiz-app.netlify.app/" />
      </Helmet>
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