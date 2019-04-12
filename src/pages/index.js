import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to Gemini.</h1>
    <p>A simple and easy way to do extraordinary things.</p>
    <Image />
    <Link to="/page-2/">This is a link to page 2</Link>
  </Layout>
)

export default IndexPage
