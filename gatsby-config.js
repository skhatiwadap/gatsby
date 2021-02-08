module.exports = {
  siteMetadata: {
    title: "poc-gatsby",
    header: {
      backgroundColor: 'tomato',
      content: 'Pantheon Gatsby POC'
    },
    footer: {
      backgroundColor: 'tomato',
      content: 'Footer @2021'
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://904bdb5cdd8b.ngrok.io/poc-pantheon-drupal/web/`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin`,
          password: `admin`
        },
      }
    }
  ],
};
