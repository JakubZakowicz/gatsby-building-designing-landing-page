import * as React from "react"
import Layout from "../components/layout"
import Header from '../components/Header'

import { Carousel } from 'react-responsive-carousel';

const IndexPage = () => (
  <Layout>
    <Header />
    <Carousel>
      <h1>Kocham gwiezdne wojny</h1>
      <h1>Wiedzmina również</h1>
      <h1>I Chyba tylko te dwa uniwersa</h1>
    </Carousel>
  </Layout>
)

export default IndexPage
