import * as React from "react";
import IndexLayout from "../layouts";
import { graphql } from 'gatsby'

// markup
const IndexPage = ({data}) => {
  return (
    <IndexLayout>
      <>
      {/* <div>{data.allNodeArticle.edges[0].node.body.processed}</div>
      <div>{data.allNodeArticle.edges[0].node.body.value}</div>
      <div dangerouslySetInnerHTML={{__html: data.allNodeArticle.edges[0].node.body.processed}}></div> */}
      </>
    </IndexLayout>
  ) 
}

// export const query = graphql`
// query IndePageQuery {
//   allNodeArticle {
//      edges{
//       node {
//         id
//         body {
//           value
//           processed
//         }
//       }
//     }
//   }
// }`;

export default IndexPage
