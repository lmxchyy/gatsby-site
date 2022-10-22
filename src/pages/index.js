
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <h1>聚合支付</h1>
      <h2>I'm diving,聚合支付业务爱好者 living in beautiful zhengzhou city.</h2>
      <p>了解聚合支付业务：<a href='https://baike.baidu.com/item/京东收银/62087475?fr=aladdin' target='_blank'>聚合支付业务介绍
          </a> 需要业务合作？请联系<Link to ='/about'>contact me.</Link>
      </p>
    </Layout>
  )
  
}

export default IndexPage