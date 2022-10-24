import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ProductPage = () => {
  return (
    <Layout>
        <h1>product</h1>
        <p><Link to ='/'>回到首页</Link></p>
        <p>产品资料库</p>
        
    </Layout>
  )
}

export default ProductPage