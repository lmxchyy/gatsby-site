const path = require('path')



// module.exports.onCreateNode = ({node,actions}) =>{
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath,'.md')
//         console.log('@@@@@@@@@@@@@@@',slug)   
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions 
//     const productTemplate = path.resolve('./src/templates/product.js')
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: productTemplate,
//             path: `/product/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
//     //1.Get path to template
//     //2.Get markdown data
//     //3.Creat new pages
// }



module.exports.createPages = async ({graphql,actions}) =>{
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    // 1. Get path to template
    // 2. Get markdown data
    // 3. Creat new pages

}

