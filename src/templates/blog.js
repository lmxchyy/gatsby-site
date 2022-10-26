import React from 'react'
import {graphql} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { GatsbyImage } from "gatsby-plugin-image"
import { useContentfulImage } from "gatsby-source-contentful/hooks"

import Layout from '../components/layout'
import Head from '../components/head'

// export const query = graphql`
//     query($slug: String!){
//         markdownRemark(fields: { slug: { eq: $slug } }){
//             frontmatter{
//                 title
//                 date
//             }
//             html
//         }        
//     }
// `

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            slug
            publishedDate(formatString: "MMMM Do ,YYYY")
            body
            {
                raw
            }
        }
    }
`

// export const query1 = graphql`
//     query($title: String!){
//         contentfulAsset(title: {eq: $title}){
//             title
//             file{
//                 fileName
//                 url
//             }
//         }
//     }
// `



const Blog =(props) =>{

    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.file['en-US'].url
    //             // const url = node.data.target.fields.file['en-US'].url
    //             return <img alt={alt} src= {url} />
    //         }
    //     }
    // }

    return(
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1> 
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw,options))} */}
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
            {/* {documentToReactComponents(props.data.contentfulAsset.file.fileName)} */}
            {/* <h1>{props.data.contentfulAsset.file.fileName}</h1> */}

        </Layout>
    )
}

// const Blog =(props) =>{
//     return(
//         <Layout>
//             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//             <p>{props.data.markdownRemark.frontmatter.date}</p>
//             <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
//         </Layout>
//     )
// }

export default Blog