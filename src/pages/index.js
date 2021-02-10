import * as React from "react";
import IndexLayout from "../layouts";
import { graphql } from 'gatsby'

// markup
const IndexPage = ({data}) => {
  return (
    <IndexLayout>
      <>
      {
        data.allNodeHomePageContent.edges.map((item, i) => (
          <>
            <h3>{item.node.title} - My Update</h3>
            <div style={{display: "flex", "flex-direction": (i % 2 === 0 ? "row-reverse": "row")}}> 
              <div dangerouslySetInnerHTML={{__html: item.node.body.value}}></div>
              <img style={{width:'20%', margin: 10}} src={item.node.relationships.field_side_image.localFile.url} alt='' />
            </div>
            <br />
          </>
        ))
      }
      </>
    </IndexLayout>
  ) 
}

export const query = graphql`
query allNodeHomePageContentQuery {
  allNodeHomePageContent {
     edges{
      node {
        body {
          value
        }
        title
        relationships {
          field_side_image {
            localFile {
              url
            }
          }
        }
      }
    }
  }
}`;

export default IndexPage
