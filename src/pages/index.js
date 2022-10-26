
import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return(
    <Layout>
      <Head title= 'Home' />
      <h1 align="center">京东聚合支付</h1>
      <h2>京东收银</h2>
      <p>
      京东收银隶属于京东科技集团。 京东收银助力线下门店实现数字化经营，专注打造安全、高效、稳定的以收银为核心的一站式门店数字化产品和服务，包含聚合收银软硬件解决方案、货品供应链、金融供应链、技术供应链等。
      </p>
      <p>
      品牌简介:依托京东集团的技术服务能力和行业经验，京东收银为零售、餐饮、健康、校园、景区、网络货运、B2B平台、企业采购等行业商家打造安全、高效、稳定的以收银为核心的一站式门店数字化产品和服务，帮助中小微商户提升商家的数智化销售经营管理能力
      </p>
      <p>了解聚合支付业务： <a href='https://baike.baidu.com/item/京东收银/62087475?fr=aladdin' target='_blank'> <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.9k9k.com%2Fm%2Fappimg%2F202012%2F31084800oxsj.png&refer=http%3A%2F%2Fimages.9k9k.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669191157&t=3b26d7f8c85b40237b542e721332f454" width="30" alt="京东收银" /> 聚合支付业务介绍
          </a> 需要业务合作？请联系<Link to ='/about'>contact me.</Link>
      </p>



    </Layout>
  )
  
}

export default IndexPage