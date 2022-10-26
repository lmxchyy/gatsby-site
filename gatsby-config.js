
// import * as dotenv from 'dotenv',
// dotenv.config()
// import express from 'express'

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// console.log(process.env)  


module.exports = {
  /* Your site config here */
  // pathPrefix: "/",
  siteMetadata:{
    title: '聚合支付业务',
    author: 'The Author'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId:`d5i1g7a6rolh`,
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name:'src',
        path:`${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-image`,
    "@contentful/rich-text-react-renderer",
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
   
  ],

}
