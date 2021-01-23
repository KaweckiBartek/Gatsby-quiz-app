import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import technology from '../../../../images/icons/technologia_ikona_.svg'
import SharedComponents from '../../../../components'

const { Header, CategoryChosen, ResultScore, MainButton, OtherCategories } = SharedComponents;

const Result = (props) => {
  const category = "technology"
  const kategoria = "TECHNOLOGIA"

  return (
    <div className="layout">
      <BackgroundImage
        fluid={props.data.technologyQuizResultImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={ true }/>
        <CategoryChosen icon={technology} title={kategoria} size="200px" />
        <ResultScore category={category} />
        <div className="result__button__margin">
        <MainButton category={category} text="POWTÓRZ QUIZ" url={`/${category}`} />
        </div>
        <OtherCategories category={category} currentCategory={ kategoria }/>
      </BackgroundImage>
    </div>
  )
}

export default Result

export const technologyQuery = graphql`
  query{
    technologyQuizResultImage: file(relativePath: {eq: "backgrounds/tech/results.png"}) {
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