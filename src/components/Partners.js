import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const Partners = () => {

  const { homeBrands } = useStaticQuery(graphql`
    query HomeBrands {
      homeBrands: allFile(
        filter: {relativePath: {regex: "/home-brands/"}, sourceInstanceName: {eq: "images"}}
        sort: {fields: relativePath, order: ASC}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  console.log(homeBrands)
  return (
    <Container>
      <Title>
        <h4>Partners</h4>
        <h1>our clients & partners</h1>
      </Title>
      <Brands>
        {homeBrands.nodes.map((brand, index) => (
          <img key={index} src={brand.childImageSharp.gatsbyImageData.images.fallback.src} alt="" />
        ))}

      </Brands>
    </Container>
  )
}

export default Partners

const Title = styled.div`
  width: 50%;

  h1, h4 {
    text-transform: uppercase;
  }

  h1 {
    margin-top: -30px;
    font-size: 50px;
  }

  h4 {
    font-family: "Montserrat", Sans-serif;
    font-weight: lighter;
    font-size: 17px;
  }
`

const Brands = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  grid-row-gap: 40px;
  grid-column-gap: 75px;

  img {
    width: 135px;
    height: 102px;
  }
`

const Container = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
  line-height: 60px;
  padding-top: 30px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    display: block;
    width: 95%;

    ${Title} {
      display: block;
      width: 100%;
    }

    ${Brands} {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`