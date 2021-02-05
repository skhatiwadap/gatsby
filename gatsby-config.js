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
        baseUrl: `http://3398e7562a36.ngrok.io/`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin`,
          password: `admin`
        },
      }
    }
  ],
};
