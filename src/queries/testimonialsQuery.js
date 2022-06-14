import { graphql, useStaticQuery } from "gatsby"

export const useGetTestimonials = () =>
  useStaticQuery(graphql`
    query TestimonialsBackgroundQuery {
      testimonialsBg: file(relativePath: { eq: "testimonials-image.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      testimonialsData: allTestimonialsDataJson {
        nodes {
          id
          author
          place
          testimonial
        }
      }
    }
  `)
