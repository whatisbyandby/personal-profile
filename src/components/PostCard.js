import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Card = styled(Link)`
  background-color: ${props => props.theme.white};
  flex-grow: 1;
  margin: 2em;
  padding: 2em;
  border-radius: 3px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  transition-duration: 250ms;
  p {
    text-align: justify;
  }

  &:hover {
    transition-duration: 250ms;
    transform: scale(1.03);
  }
`

const PostCard = props => {
  const { edge } = props
  const { node } = edge
  console.log(node.frontmatter.featuredImage)
  let featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Card to={node.frontmatter.path}>
      <h3>
        {node.frontmatter.title} - {node.frontmatter.date}
      </h3>
      <Img fluid={featuredImgFluid} style={{ width: "100%" }} />
      <p>{node.frontmatter.description}</p>
    </Card>
  )
}

export default PostCard
