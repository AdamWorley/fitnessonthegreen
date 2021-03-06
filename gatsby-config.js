require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Fitness on The Green",
    siteUrl: "https://www.fitonthegreen.co.uk",
    url: "https://www.fitonthegreen.co.uk",
    description: "YOUR FITNESS JOURNEY BROUGHT TO YOU LOCALLY",
    mapboxToken: process.env.MAPBOX_API_TOKEN,
    instagram: "fiitonthegreen",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lqsrxuinnx50`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "setmore-plugin",
      options: {
        refreshToken: process.env.SETMORE_REFRESH_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
        name: `Fitness on The Green`,
        short_name: `Fitness on The Green`,
        start_url: `/`,
        background_color: `#27475b`,
        theme_color: `#151c25`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
