import React from 'react'
import Header from '../../../../components/heading/Header'
import StartButton from '../../../../components/buttons/StartButton'
import CategoryChosen from '../../../../components/categories/CategoryChosen'
import Score from '../../../../components/score'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import technology from '../../../../images/icons/technologia_ikona_.svg'
import OtherCategories from '../../../../components/categories/OtherCategory'

const Result = (props) => {
  const category = "technology"
  const kategoria = "TECHNOLOGIA"

  return (
    <div className="home">
      <BackgroundImage
        fluid={props.data.technologyQuizResultImage.childImageSharp.fluid}
        className="full__page__background"
      >
        <Header />
        <CategoryChosen icon={technology} title={kategoria} size="200px" />
        <Score category={category} />
        <div className="result__button__margin">
        <StartButton category={category} text="POWTÓRZ QUIZ" url={`/${category}`} />
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