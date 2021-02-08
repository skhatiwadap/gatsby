import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts"

const RecipeTemplate = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{__html: data.node.body.value}}></div>
  </Layout>
)

export const query = graphql`
query ($slug: String!) {
    node: nodePage(path: {alias: {eq: $slug}}) {
      body {
        value
      }
    }
  }
  
  `;

export default RecipeTemplate
