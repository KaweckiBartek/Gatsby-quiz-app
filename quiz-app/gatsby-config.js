/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: "Gatsby Quiz app",
    titleTemplate: "%s · The Real Hero",
    description:
      "Best Quiz app with amazing optimalization!.",
    url: "https://gatsby-quiz-app.netlify.app/", // No trailing slash allowed!
    image: "/images/logo/Q.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
  ],
}
