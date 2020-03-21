import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Card = styled.div`
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
  p {
    text-align: justify;
  }
`

const PostCard = props => {
  const { edge } = props
  const { node } = edge
  console.log(node.id)
  return (
    <Card>
      <h3>
        <Link to={node.frontmatter.path}>
          {node.frontmatter.title} - {node.frontmatter.date}
        </Link>
      </h3>
      <p>{node.frontmatter.description}</p>
    </Card>
  )
}

export default PostCard
