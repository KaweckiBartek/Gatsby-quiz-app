import React from 'react'
import '../styles/themes/default/theme.scss';
import Header from '../components/heading/Header'
import Heading from '../components/heading/Heading'
import Categories from '../components/categories'
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const Home = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.indexImage.childImageSharp.fluid}
        className="full__page__background"
      >

        <Header />
        <Heading text="10 PYTAŃ / 5 KATEGORII" category="programming" />
        <Categories />
      </BackgroundImage>
    </div>
  )
}

export default Home

export const homeQuery = graphql`
  query{
    indexImage: file(relativePath: {eq: "backgrounds/programming/home.png"}) {
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