import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>This is the Portfolio Page</h1>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default SecondPage
