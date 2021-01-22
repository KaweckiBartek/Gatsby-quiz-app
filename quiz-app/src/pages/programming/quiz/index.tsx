import React from 'react'
import Header from '../../../components/heading/Header'
import Heading from '../../../components/heading/Heading'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import QuizComponent from '../../../components/quizComponent'


const Quiz = (props) => {
  const category = "programming"
  const questions = [
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
    {
      question: "Lorem ipsum Lorem Sia La La la?",
      choices: [
        "A. Lorem Ipsum",
        "B. Lorem Lorem",
        "C. Ipsum Ipsum",
        "D. Ipsum Lorem Lorem",
        "E. Loret De Mar"
      ],
      correct: "B. Lorem Lorem",
    },
  ]

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.programmingImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <Heading category={category} text="WYBRANA KATEGORIA:" />
        <QuizComponent {...{category, questions}} />
      </BackgroundImage>
    </div>
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