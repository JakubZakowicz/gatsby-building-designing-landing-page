import { graphql, useStaticQuery } from "gatsby"

export const useGetLogoImage = () =>
  useStaticQuery(graphql`
    query LogoImageQuery {
      file(relativePath: { eq: "header-logo.png" }) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
