import React from 'react'
import programing from '../../images/icons/programowanie_ikona.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';
import Layout from '../../layouts';
import { Helmet } from "react-helmet"

const { Header, Heading, CategoryChosen, MainButton } = SharedComponents;

const Programming = (props) => {
  const category = "programming"
  const kategoria = "PROGRAMOWANIE"
  
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Programowanie - Gatsby Quiz App</title>
        <link rel="canonical" href="https://gatsby-quiz-app.netlify.app/" />
      </Helmet>
      <BackgroundImage
        fluid={props.data.programmingImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <Heading category={category} text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={programing} title={kategoria} size="200px" />
        <MainButton category={category} url={`/${category}/quiz`} text="ROZPOCZNIJ" />
      </BackgroundImage>
    </Layout>
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