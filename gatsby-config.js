/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // pathPrefix: "/",
  siteMetadata:{
    title: 'Diving-web!',
    author: 'The Author'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name:'src',
        path:`${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
  ],


}
