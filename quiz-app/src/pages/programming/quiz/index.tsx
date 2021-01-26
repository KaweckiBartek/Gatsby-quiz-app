import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import { ScoreProvider } from '../../../context'
import {programmingQuestions as questions} from '../../../data'
import SharedComponents from '../../../components'
import Layout from '../../../layouts'
import { Helmet } from "react-helmet"

const { Header, Heading, QuizComponent } = SharedComponents;

const Quiz = (props) => {
  const category = "programming"

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Quiz - Gatsby Quiz App</title>
        <link rel="canonical" href="https://gatsby-quiz-app.netlify.app/" />
      </Helmet>
        <BackgroundImage
          fluid={props.data.programmingImage.childImageSharp.fluid}
          className="full-page__background"
        >
          <Header backButton={true} />
          <Heading category={category} text="WYBRANA KATEGORIA:" />
          <QuizComponent {...{ category, questions }} />
        </BackgroundImage>
      </Layout>
  )
}

export default Quiz

export const programmingQuery = graphql`
  query{
    programmingImage: file(relativePath: {eq: "backgrounds/programming/select.png"}) {
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