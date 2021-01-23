import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import history from '../../../../images/icons/historia_ikona.svg'
import SharedComponents from '../../../../components'
import Layout from '../../../../layouts'

const { Header, CategoryChosen, ResultScore, MainButton, OtherCategories } = SharedComponents;

const Result = (props) => {
  const category = "history"
  const kategoria = "HISTORIA"

  return (
    <Layout>
      <BackgroundImage
        fluid={props.data.historyQuizResultImage.childImageSharp.fluid}
        className="full-page__background"
      >
        <Header backButton={ true }/>
        <CategoryChosen icon={history} title={kategoria} size="200px" />
        <ResultScore category={category} />
        <div className="result__button__margin">
        <MainButton category={category} text="POWTÓRZ QUIZ" url={`/${category}`} />
        </div>
        <OtherCategories category={category} currentCategory={ kategoria }/>
      </BackgroundImage>
    </Layout>
  )
}

export default Result

export const historyQuery = graphql`
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