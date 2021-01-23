import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import {automotiveQuestions as questions} from '../../../data'
import SharedComponents from '../../../components'
import Layout from '../../../layouts'

const { Header, Heading, QuizComponent } = SharedComponents;

const Quiz = (props) => {
  const category = "automotive"
  
  return (
      <Layout>
        <BackgroundImage
          fluid={props.data.automotiveQuizImage.childImageSharp.fluid}
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

export const automotiveQuery = graphql`
  query{
    automotiveQuizImage: file(relativePath: {eq: "backgrounds/moto/select.png"}) {
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