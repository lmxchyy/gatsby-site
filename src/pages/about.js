import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
        <h1>About Me</h1>
        <p>one of Payment Industry Practitioners</p>
        <p>请联系我<Link to ='/contact'>contact me.</Link></p>
    </Layout>
  )
}

export default AboutPage