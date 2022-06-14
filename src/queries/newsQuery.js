import { graphql, useStaticQuery } from "gatsby"

export const useGetNews = () =>
  useStaticQuery(graphql`
    query News {
      news: allNewsDataJson {
        nodes {
          id
          title
          author
          createdAt
          description
        }
      }
    }
  `)
