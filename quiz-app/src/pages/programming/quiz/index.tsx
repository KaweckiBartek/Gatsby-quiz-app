import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import { ScoreProvider } from '../../../context'
import {programmingQuestions as questions} from '../../../data'
import SharedComponents from '../../../components'

const { Header, Heading, QuizComponent } = SharedComponents;

const Quiz = (props) => {
  const category = "programming"

  return (
    <ScoreProvider>
      <div className="home">
        <BackgroundImage
          fluid={props.data.programmingImage.childImageSharp.fluid}
          className="full-page__background"
        >
          <Header backButton={true} />
          <Heading category={category} text="WYBRANA KATEGORIA:" />
          <QuizComponent {...{ category, questions }} />
        </BackgroundImage>
      </div>
    </ScoreProvider>
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