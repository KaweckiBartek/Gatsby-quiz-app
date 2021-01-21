import React from 'react'
import Header from '../../../../components/heading/Header'
import StartButton from '../../../../components/buttons/StartButton'
import CategoryChosen from '../../../../components/categories/CategoryChosen'
import Score from '../../../../components/score'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import history from '../../../../images/icons/historia_ikona.svg'
import OtherCategories from '../../../../components/categories/OtherCategory'

const Result = (props) => {
  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.historyQuizResultImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <CategoryChosen icon={history} title="PROGRAMOWANIE" size="200px" />
        <Score category="programming" />
        <div className="result__button__margin">
        <StartButton text="POWTÓRZ QUIZ" url="/programming" />
        </div>
        <OtherCategories currentCategorry="PROGRAMOWANIE"/>
      </BackgroundImage>
    </div>
  )
}


export default Result

export const programmingQuery = graphql`
  query{
    historyQuizResultImage: file(relativePath: {eq: "backgrounds/history/results.png"}) {
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