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
        baseUrl: `http://904bdb5cdd8b.ngrok.io/poc-pantheon-two/web/`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin@wampserver.invalid`,
          password: `admin`
        },
      }
    }
  ],
};
