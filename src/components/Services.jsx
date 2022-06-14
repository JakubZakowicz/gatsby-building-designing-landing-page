import React from "react"
import { getImage } from "gatsby-plugin-image"
import {
  ServicesContainer,
  Service,
  ServiceLink,
} from "../styles/servicesStyles"
import { useGetServices } from "../queries/servicesQuery"

function Services() {
  const { services } = useGetServices()
  const serviceLinks = ["architecture", "engineering", "interior design"]
  const serviceImages = services.nodes

  return (
    <ServicesContainer>
      {serviceImages.map((serviceImage, index) => (
        <Service key={serviceImage.id} image={getImage(serviceImage)}>
          <ServiceLink to="/">{serviceLinks[index]}</ServiceLink>
        </Service>
      ))}
    </ServicesContainer>
  )
}

export default Services
