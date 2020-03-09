import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is the Home Page</h1>
    <Link to="/portfolio/">Go to Portfolio</Link>
  </Layout>
)

export default IndexPage
