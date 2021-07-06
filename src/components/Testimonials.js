import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import { useStaticQuery, graphql } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'

const Testimonials = () => {
    const { testimonialsBg } = useStaticQuery(graphql`
        query TestimonialsBackgroundQuery {
            testimonialsBg: file(relativePath: {eq: "testimonials-image.jpg"}) {
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
                    <TestimonialCarousel
                        infiniteLoop
                        emulateTouch
                        showArrows={false}
                        showStatus={false}
                    >
                        <div>
                            <h3>testimonials</h3>
                            <h1>what our <br/> clients say</h1>

                            <p>Warmhouse has been a great partner to work with, whenever we need something done right away, and when we need someone we can trust to do the right thing.</p>

                            <h3>John, posted on tripadvisor</h3>
                        </div>
                        <div>
                            <h3>testimonials</h3>
                            <h1>what our <br/> clients say</h1>

                            <p>Warmhouse has been a great partner to work with, whenever we need something done right away, and when we need someone we can trust to do the right thing.</p>

                            <h3>John, posted on tripadvisor</h3>
                        </div>
                        <div>
                            <h3>testimonials</h3>
                            <h1>what our <br/> clients say</h1>

                            <p>Warmhouse has been a great partner to work with, whenever we need something done right away, and when we need someone we can trust to do the right thing.</p>

                            <h3>John, posted on tripadvisor</h3>
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
`
const OrangeBg = styled.div`
    background: rgba(247,153,43, 0.8);
    padding: 500px 0 100px 0;
    color: #fff;    
`

const TestimonialCarousel = styled(Carousel)`
    width: 50%;

    div {
        width: 50%;
        margin-left: 100px;
    }

    p {
        width: 60%;
    }

    h1, h3 {
        text-transform: uppercase;
    }

    h1 {
        font-size: 35px;
    }
`