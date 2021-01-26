import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby"
import automotive from '../../../../images/icons/motoryzacja_ikona.svg'
import SharedComponents from '../../../../components'
import Layout from '../../../../layouts'
import { Helmet } from "react-helmet"

const { Header, CategoryChosen, ResultScore, MainButton, OtherCategories } = SharedComponents;

const Result = (props) => {
  const category = "automotive"
  const kategoria = "MOTORYZACJA"

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Result - Gatsby Quiz App</title>
        <link rel="canonical" href="https://gatsby-quiz-app.netlify.app/" />
      </Helmet>
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
        <OtherCategories category={category} currentCategory={kategoria} />
      </BackgroundImage>
    </Layout>
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