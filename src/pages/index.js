import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout className="layout">
      <SEO title="Home" />
      <div className="content-container">
        <h1>Home</h1>
        <p>This is to do some testing, No more loreum ipsum</p>
      </div>
    </Layout>
  )
}
