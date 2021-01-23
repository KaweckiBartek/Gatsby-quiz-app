import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import automotive from '../../../../images/icons/motoryzacja_ikona.svg'
import SharedComponents from '../../../../components'

const { Header, CategoryChosen, ResultScore, MainButton, OtherCategories } = SharedComponents;

const Result = (props) => {
  const category = "automotive"
  const kategoria = "MOTORYZACJA"

  return (
    <div className="layout">
      <BackgroundImage
        fluid={props.data.automotiveQuizResultImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={true} />
        <CategoryChosen icon={automotive} title={kategoria} size="200px" />
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

export const automotiveQuery = graphql`
  query{
    automotiveQuizResultImage: file(relativePath: {eq: "backgrounds/moto/results.png"}) {
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