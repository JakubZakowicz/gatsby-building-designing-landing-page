import { graphql, useStaticQuery } from "gatsby"

export const useGetHeaderData = () =>
  useStaticQuery(graphql`
    query BackgroundImageQuery {
      backgroundImages: allFile(
        filter: { relativePath: { regex: "/header-background/" } }
        sort: { fields: relativePath, order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      titles: allHeaderDataJson {
        edges {
          node {
            title
            subtitle
          }
        }
      }
    }
  `)

