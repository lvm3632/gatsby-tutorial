import React from "react"
import Cards from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
import {Helmet} from 'react-helmet'
export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-md-8">
   
      {data.allWordpressPost.nodes.map(node => (
        <Cards
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
