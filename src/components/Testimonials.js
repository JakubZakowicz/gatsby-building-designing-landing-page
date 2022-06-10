import React from "react"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"

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

const TestimonialsContainer = styled.div`
  position: absolute;
  top: 500px;
  right: 0;
  width: 50%;

  @media (max-width: 767px) {
    position: static;
    width: 100%;
  }
`
const OrangeBg = styled.div`
  background: rgba(247, 153, 43, 0.8);
  padding: 500px 0 100px 0;
  color: #fff;

  h3,
  h1 {
    margin-left: 100px;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2.5rem;
  }
`

const TestimonialCarousel = styled(Carousel)`
  width: 80%;

  div {
    width: 50%;
    margin-left: 100px;
  }

  p {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 1.3rem;
    line-height: 30px;
    text-align: left;
  }

  h3 {
    text-transform: uppercase;
    text-align: left;
  }
`
