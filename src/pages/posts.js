import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import PostCard from "../components/PostCard"

const CardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function Posts() {
  const data = useStaticQuery(graphql`
    query postsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <Layout>
      <SEO title="Posts" />
      <CardContainer>
        {edges.map(edge => (
          <PostCard edge={edge} key={edge.node.id} />
        ))}
      </CardContainer>
    </Layout>
  )
}
