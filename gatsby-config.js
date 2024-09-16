/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio - Kevin Blancaflor - Nex AI™`,
    description: `Location: Ghent, Belgium, Europe About: I’m a web and mobile app developer based in Ghent, Belgium, specializing in cutting-edge technologies like React.js, React Native, TypeScript, and Next.js. With a passion for crafting scalable and user-centric applications, I combine the power of JavaScript with the flexibility of these frameworks to deliver seamless, performant experiences. Additionally, I’m diving deep into the world of Artificial Intelligence, where I integrate intelligent systems into modern digital solutions, exploring the boundaries of what's possible in today’s tech landscape.`,
    author: `@nexai`,
    siteUrl: `https://portfolionexai.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
