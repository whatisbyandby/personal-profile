import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      markdownRemark {
        frontmatter {
          title
          content
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark

  return (
    <Layout className="layout">
      <SEO title="Home" />
      <div className="content-container">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.content}</p>
      </div>
    </Layout>
  )
}

export default IndexPage
