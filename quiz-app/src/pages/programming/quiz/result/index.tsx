import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import programing from '../../../../images/icons/programowanie_ikona.svg'
import { ScoreProvider } from '../../../../context'
import SharedComponents from '../../../../components'

const { Header, CategoryChosen, ResultScore, MainButton, OtherCategories } = SharedComponents;

const Result = (props) => {
  const category = "programming"
  const kategoria = "PROGRAMOWANIE"

  return (
    <ScoreProvider>
      <div className="home">
        <BackgroundImage
          fluid={props.data.programmingQuizResultImage.childImageSharp.fluid}
          className="full-page__background"
        >
          <Header backButton={true} />
          <CategoryChosen icon={programing} title={kategoria} size="200px" />
          <ResultScore category={category} />
          <div className="result__button__margin">
            <MainButton category={category} text="POWTÓRZ QUIZ" url={`/${category}`} />
          </div>
          <OtherCategories category={category} currentCategory={kategoria} />
        </BackgroundImage>
      </div>
    </ScoreProvider>
  )
}

export default Result

export const programmingQuery = graphql`
  query{
    programmingQuizResultImage: file(relativePath: {eq: "backgrounds/programming/resuts.png"}) {
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