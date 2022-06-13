import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { useStaticQuery, graphql } from "gatsby"

import {
  TestimonialsContainer,
  OrangeBg,
  TestimonialCarousel,
} from "../styles/testimonialsStyles"

const Testimonials = () => {
  const { testimonialsBg } = useStaticQuery(graphql`
    query TestimonialsBackgroundQuery {
      testimonialsBg: file(relativePath: { eq: "testimonials-image.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <BgImage image={getImage(testimonialsBg)}>
        <OrangeBg>
          <h3>testimonials</h3>
          <h1>
            what our <br /> clients say
          </h1>
          <TestimonialCarousel
            infiniteLoop
            emulateTouch
            showArrows={false}
            showStatus={false}
          >
            <div>
              <p>
                Warmhouse has been a great partner to work with, whenever we
                need something done right away, and when we need someone we can
                trust to do the right thing.
              </p>
              <h3>JOHN, posted on tripadvisor</h3>
            </div>
            <div>
              <p>
                It's been a pleasure working with Warmhouse team on the build
                out of our new executive office space at in Westlake Village,
                CA. Throughout hte process.
              </p>
              <h3>LILI, posted on tripadvisor</h3>
            </div>
            <div>
              <p>
                It is not every construction company that can build a building
                from ground up and complete 80,000 sq. ft. of first class office
                improvement space in 13 months.
              </p>
              <h3>KENT, posted on tripadvisor</h3>
            </div>
          </TestimonialCarousel>
        </OrangeBg>
      </BgImage>
    </TestimonialsContainer>
  )
}

export default Testimonials
