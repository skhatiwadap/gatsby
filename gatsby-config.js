module.exports = {
  siteMetadata: {
    title: "poc-gatsby",
    header: {
      backgroundColor: 'tomato',
      content: 'Pantheon Gatsby POC'
    },
    footer: {
      backgroundColor: 'green',
      content: 'Footer @2021'
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-poc-panth.pantheonsite.io`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin`,
          password: `admin`
        },
      }
    }
  ],
};
