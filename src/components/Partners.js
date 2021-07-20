import React from 'react'
import styled from 'styled-components'
import img from '../images/home-brands-1.png'

const Partners = () => {
  return (
    <Container>
      <Title>
        <h4>Partners</h4>
        <h1>our clients & partners</h1>
      </Title>
      <Brands>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </Brands>
    </Container>
  )
}

export default Partners

const Container = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
  line-height: 60px;
  padding-top: 30px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`

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
    font-size: 20px;
  }

  @media (max-width: 767px) {
      display: block;
      width: 100%;
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

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`