import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

function Services() {

  const { services } = useStaticQuery(graphql`
    query ServicesQuery {
      services: allFile(
        filter: {relativePath: {regex: "/services/"}}
        ) {
        nodes {
          childImageSharp {
              gatsbyImageData
            }
          }
        }
    }
  `)

  const animations = {
    service1: useSpring({
      from: {
          transform: 'translateX(-300px)',
          opacity: 0
      },
      to: {
          transform: 'translateX(0)',
          opacity: 1
      }
    }),
    service2: useSpring({
        from: {
            transform: 'translateY(-300px)',
            opacity: 0
        },
        to: {
            transform: 'translateY(0)',
            opacity: 1
        }
    }),
    service3: useSpring({
        from: {
            transform: 'translateX(300px)',
            opacity: 0
        },
        to: {
            transform: 'translateX(0)',
            opacity: 1
        }
    })
  }

  const serviceLinks = ['architecture', 'engineering', 'interior design']

  const serviceImages = services.nodes

  return (
    <ServicesContainer>
      {serviceImages.map((serviceImage, index) => (
        <animated.div style={animations[index]}>
          <Service image={getImage(serviceImage)}>
            <ServiceLink to='/about'>{ serviceLinks[index] }</ServiceLink>
          </Service>
        </animated.div>
      ))}
    </ServicesContainer>
  )
}

export default Services

const Service = styled(BgImage)`
    position: relative;
    width: 370px;
    height: 515px;
    z-index: 100;
`

const ServiceLink = styled(Link)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    color: white;
    font-size: 25px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: #e18f2f;
    }
`

const ServicesContainer = styled.div`
    margin: auto;
    margin-top: 40px;
    width: 1175px;
    display: flex;
    justify-content: space-between;

    div {
        transition: all 0.5s ease-in-out;
    }

    @media (max-width: 767px) {
      display: block;
      width: 100%;

      ${Service} {
          width: 96%;
          margin: auto;
          margin-bottom: 20px;
      }
    }
`