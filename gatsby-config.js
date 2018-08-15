module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#33B67A',
        theme_color: '#33B67A',
        display: 'minimal-ui',
        icon: 'src/images/apple-touch-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
