import * as React from 'react'
import { Link,graphql,useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'

const ProductPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <Head title="Product"/>
        <h1>product</h1>
        <p><Link to ='/'>回到首页</Link></p>
        <p>产品资料库</p>
        <ol className = { blogStyles.posts }>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className ={blogStyles.post}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
    </Layout>
  )
}

export default ProductPage


// 原文件：

// const ProductPage = () => {
//     const data = useStaticQuery(graphql`
//       query{
//         allMarkdownRemark{
//           edges {
//             node {
//               frontmatter {
//                 title
//                 date
//               }
//               fields{
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)
  
//     // console.log(data)
  
//     return (
//       <Layout>
//         <Head title="Product"/>
//           <h1>product</h1>
//           <p><Link to ='/'>回到首页</Link></p>
//           <p>产品资料库</p>
//           <ol className = { blogStyles.posts }>
//             {data.allMarkdownRemark.edges.map((edge) => {
//               return (
//                 <li className ={blogStyles.post}>
//                    <Link to = {`/product/${edge.node.fields.slug}`}>
//                       <h2>{edge.node.frontmatter.title}</h2>
//                       <p>{edge.node.frontmatter.date}</p>
//                    </Link>
//                 </li>
//               )
//             })}
//           </ol>
//       </Layout>
//     )
//   }
  
//   export default ProductPage