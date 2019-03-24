module.exports = {
  siteMetadata: {
    title: `Kendall Whitman`,
    subtitle: `Web Developer`,
    description: `Portfolio`,
    author: `Kendall Whitman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      option: {
        rule: {
          include: '/src/images/'
        }
      }
    }
  ],
}
