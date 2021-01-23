import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import SharedComponents from '../../../components'
import {cultureQuestions as questions} from '../../../data'
import Layout from '../../../layouts'

const {Header, Heading, QuizComponent} = SharedComponents

const Quiz = (props) => {
  const category = "culture"
  
  return (
      <Layout>
        <BackgroundImage
          fluid={props.data.cultureSelect.childImageSharp.fluid}
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

export const cultureQuery = graphql`
  query{
    cultureSelect: file(relativePath: {eq: "backgrounds/art/select.png"}) {
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