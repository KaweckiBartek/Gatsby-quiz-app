import React from 'react'
import automotive from '../../images/icons/motoryzacja_ikona.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../components';
import Layout from '../../layouts';
import { Helmet } from "react-helmet"

const { Header, Heading, CategoryChosen, MainButton } = SharedComponents;

const Automotive = (props) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Motoryzacja - Gatsby Quiz App</title>
        <link rel="canonical" href="https://gatsby-quiz-app.netlify.app/" />
      </Helmet>
      <BackgroundImage
        fluid={props.data.automotiveImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <Heading category="automotive" text="WYBRANA KATEGORIA:" />
        <CategoryChosen icon={automotive} title="MOTORYZACJA" size="200px" />
        <MainButton category="automotive" url="/automotive/quiz" text="ROZPOCZNIJ"/>
      </BackgroundImage>
    </Layout>
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