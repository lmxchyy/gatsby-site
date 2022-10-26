import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ProductPage = () => {
  
  
  return (
    <Layout>
      <Head title="Product"/>
        <h1>product</h1>
        <p><Link to ='/'>回到首页</Link></p>
        <p>产品资料库</p>
        
    </Layout>
  )
}

export default ProductPage