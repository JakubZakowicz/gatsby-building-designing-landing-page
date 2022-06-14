import { graphql, useStaticQuery } from "gatsby"

export const useGetPortfolioData = () =>
  useStaticQuery(graphql`
    query MyQuery {
      portfolioImgs: allFile(
        filter: {
          relativePath: { regex: "/portfolio/" }
          sourceInstanceName: { eq: "images" }
        }
        sort: { fields: relativePath, order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      portfolioData: allPortfolioDataJson {
        nodes {
          title
          desc
        }
      }
    }
  `)
