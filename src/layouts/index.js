import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// markup
const IndexLayout = ({children}) => {
  const data = useStaticQuery(
    graphql`
    query IndexLayoutQuery {
      site {
        siteMetadata {
          title 
          header {
            content
            backgroundColor
          }
          footer {
            content
            backgroundColor
          }
        }
      }
    }`
  )
  return (
    <div class='container'>
      <h2>Hey This is my change! Horray!!!</h2>
      <div style={{backgroundColor: data.site.siteMetadata.header.backgroundColor, padding: '1em'}}>
          <h1>{data.site.siteMetadata.header.content}</h1>
      </div>
      {children}
      <div style={{backgroundColor: data.site.siteMetadata.footer.backgroundColor, padding: '0.3em'}}>
        {data.site.siteMetadata.footer.content}
      </div>
    </div>
  )
}

export default IndexLayout;
