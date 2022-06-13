import styled from "styled-components"
import { Link } from "gatsby"
import { BgImage } from "gbimage-bridge"

export const Service = styled(BgImage)`
  position: relative;
  width: 370px;
  height: 515px;
  z-index: 200;
`

export const ServicesContainer = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 1175px;
  display: flex;
  justify-content: space-between;

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

export const ServiceLink = styled(Link)`
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
