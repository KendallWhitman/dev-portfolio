module.exports = {
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
    },
  ],
}
