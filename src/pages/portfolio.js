import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default SecondPage
