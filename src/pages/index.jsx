import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import AboutHome from "../components/AboutHome"
import Portfolio from "../components/Portfolio"
import Partners from "../components/Partners"
import News from "../components/News"
import Contact from "../components/Contact"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home Page" />
    <Header />
    <AboutHome />
    <Portfolio />
    <Partners />
    <News />
    <Contact />
  </Layout>
)

export default IndexPage
