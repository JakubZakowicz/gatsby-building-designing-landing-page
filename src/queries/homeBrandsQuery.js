import { graphql, useStaticQuery } from "gatsby"

export const useGetHomeBrands = () =>
  useStaticQuery(graphql`
    query HomeBrands {
      homeBrands: allFile(
        filter: {
          relativePath: { regex: "/home-brands/" }
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
    }
  `)
