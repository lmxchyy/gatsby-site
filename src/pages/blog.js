import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'

//
// Goal: Render Contentful Posts
// 
// 1. Swap out the markdown query with the contentful query
// 2. Update the component to render the new data
//    - Don't worry if the link links to a non-existant page
// 3. Test your work!


const BlogPage = () => {    
    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(sort:{fields: publishedDate,order: DESC}){
                edges{
                  node{
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                  }
                }
              }

        }
    `)

    
    return (
        <Layout >
            <Head title = "Blog"/>
            <h1>Blog</h1>
            <ol className = {blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge)=>{
                    return(
                        <li className = {blogStyles.post}>
                            <Link to ={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                {/* <h4>{edge.node.excerpt}</h4> */}
                            </Link>
                        </li>
                    )

                })}
            </ol>
        </Layout>
    )
}

export default BlogPage

            // allMarkdownRemark{
            //     edges {
            //         node {
            //             frontmatter{
            //                 title
            //                 date
            //             }
            //             fields{
            //                 slug
            //             }
            //         }
            //     }
            // }

            // return (
            //     <Layout >
            //         <h1>Blog</h1>
            //         <ol className = {blogStyles.posts}>
            //             {data.allMarkdownRemark.edges.map((edge)=>{
            //                 return(
            //                     <li className = {blogStyles.post}>
            //                         <Link to ={`/blog/${edge.node.fields.slug}`}>
            //                             <h2>{edge.node.frontmatter.title}</h2>
            //                             <p>{edge.node.frontmatter.date}</p>
            //                             {/* <h4>{edge.node.excerpt}</h4> */}
            //                         </Link>
            //                     </li>
            //                 )
        
            //             })}
            //         </ol>
            //     </Layout>
            // )