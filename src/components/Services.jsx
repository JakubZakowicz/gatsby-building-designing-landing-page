import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import {
  ServicesContainer,
  Service,
  ServiceLink,
} from "../styles/servicesStyles"

function Services() {
  const { services } = useStaticQuery(graphql`
    query ServicesQuery {
      services: allFile(filter: { relativePath: { regex: "/services/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const serviceLinks = ["architecture", "engineering", "interior design"]

  const serviceImages = services.nodes

  return (
    <ServicesContainer>
      {serviceImages.map((serviceImage, index) => (
        <Service image={getImage(serviceImage)}>
          <ServiceLink to="/">{serviceLinks[index]}</ServiceLink>
        </Service>
      ))}
    </ServicesContainer>
  )
}

export default Services
