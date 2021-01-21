import React from 'react'
import Header from '../../../../components/heading/Header'
import StartButton from '../../../../components/buttons/StartButton'
import CategoryChosen from '../../../../components/categories/CategoryChosen'
import Score from '../../../../components/score'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import programing from '../../../../images/icons/programowanie_ikona.svg'
import OtherCategories from '../../../../components/categories/OtherCategory'

const Result = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.quizResultImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <CategoryChosen icon={programing} title="PROGRAMOWANIE" size="200px" />
        <Score category="programming" />
        <div className="result__button__margin">
        <StartButton category="programming" text="POWTÓRZ QUIZ" url="/programming" />
        </div>
        <OtherCategories category="programming" currentCategory="PROGRAMOWANIE"/>
      </BackgroundImage>
    </div>
  )
}

export default Result

export const programmingQuery = graphql`
  query{
    quizResultImage: file(relativePath: {eq: "backgrounds/programming/resuts.png"}) {
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