module.exports = {
  siteMetadata: {
    title: `elizacottrell.com`,
    description: `Elizabeth Cottrell's portfolio website`,
    author: `Eliza`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156509644-1",
        head: true,
        respectDNT: false,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rgb(121, 109, 153)`,
        theme_color: `rgb(121, 109, 153)`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
