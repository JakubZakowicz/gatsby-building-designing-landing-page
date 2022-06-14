import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import {
  TestimonialsContainer,
  OrangeBg,
  TestimonialCarousel,
  Author,
  Testimonial
} from "../styles/testimonialsStyles"
import { useGetTestimonials } from "../queries/testimonialsQuery"

const Testimonials = () => {
  const { testimonialsBg, testimonialsData } = useGetTestimonials()
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
            {testimonialsData.nodes.map(testimonial => (
              <div key={testimonial.id}>
                <Testimonial>{testimonial.testimonial}</Testimonial>
                <Author>
                  <strong>{testimonial.author}</strong>, posted on{" "}
                  {testimonial.place}
                </Author>
              </div>
            ))}
          </TestimonialCarousel>
        </OrangeBg>
      </BgImage>
    </TestimonialsContainer>
  )
}

export default Testimonials
