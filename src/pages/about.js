import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
        <h1>About Me</h1>
        <p>one of Payment Industry Practitioners</p>
        <p>请联系我<Link to ='/contact'>contact me.</Link></p>
    </Layout>
  )
}

export default AboutPage