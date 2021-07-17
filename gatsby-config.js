module.exports = {
  siteMetadata: {
    title: "Fitness on The Green",
    siteUrl: "https://www.fitonthegreen.co.uk",
    url: "https://www.fitonthegreen.co.uk",
    description: "YOUR FITNESS JOURNEY BROUGHT TO YOU LOCALLY",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
