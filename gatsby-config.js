/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ololade-dare-to-dream`,
    siteUrl: `https://orlhatundji.github.io/ololade-dare-to-dream/`,
    description: `Ololade Ayelabola is a model, beauty queen, and entrepreneur. She is the founder of Dare to Dream, a platform that empowers young people to achieve their dreams.`,
    keywords: `Ololade, Ayelabola, Model, Beauty Queen, Entrepreneur, Dare to dream, Ololade Ayelabola, Ololade Ayelabola Dare to dream, Ololade Ayelabola Model, Ololade Ayelabola Beauty Queen, Ololade Ayelabola Entrepreneur, Ololade Ayelabola Dare to dream Model, Ololade Ayelabola Dare to dream Beauty Queen, Ololade Ayelabola Dare to dream Entrepreneur, Ololade Ayelabola Model Beauty Queen, Ololade Ayelabola Model Entrepreneur, Ololade Ayelabola Beauty Queen Entrepreneur, Ololade Ayelabola Model Beauty Queen Entrepreneur, Ololade Ayelabola Dare to dream Model Beauty Queen, Ololade Ayelabola Dare to dream Model Entrepreneur, Ololade Ayelabola Dare to dream Beauty Queen Entrepreneur, Ololade Ayelabola Dare to dream Model Beauty Queen Entrepreneur`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "icons",
        path: "./src/assets/icons/",
      },
      __key: "icons",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
};
