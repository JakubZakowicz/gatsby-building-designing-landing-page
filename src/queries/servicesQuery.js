import { graphql, useStaticQuery } from "gatsby"

export const useGetServices = () =>
  useStaticQuery(graphql`
    query ServicesQuery {
      services: allFile(filter: { relativePath: { regex: "/services/" } }) {
        nodes {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  `)
