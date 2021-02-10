const loc = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tpl_page = loc.resolve(`src/templates/pages.js`);
  const pageResult = await graphql(`
    {
      pages: allNodePage {
        edges {
          node {
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)

  pageResult.data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: tpl_page,
      context: {
        slug: node.path.alias,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Use the system name of your own content type from Drupal.
  if (
    node.internal.type === `node__page`
  ) {
    const slug = `${node.path.alias}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}