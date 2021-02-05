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
        baseUrl: `http://67eb5c284fa2.ngrok.io/poc-pantheon-two/web`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin`,
          password: `admin`
        },
      }
    }
  ],
};
