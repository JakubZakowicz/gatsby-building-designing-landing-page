import styled from "styled-components"
import { keyframes } from "styled-components"
import { BgImage } from "gbimage-bridge"

export const Heading = styled(BgImage)`
  width: 100%;
  height: 100vh;
  position: relative;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    text-align: center;
  }

  h1 {
    font-size: 70px;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 80px;
    margin-bottom: -15px;
  }

  h2 {
    font-size: 40px;
    font-weight: lighter;
  }

  button {
    padding: 15px 30px;
    background: #f7992b;
    border: 3px solid #f7992b;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    transition: 0.2s all ease-in-out;
    text-transform: uppercase;
  }

  button:hover {
    background: transparent;
    color: #f7992b;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 40px;
      line-height: 50px;
    }

    h2 {
      font-size: 25px;
    }
  }
`

export const Arrow = styled.span`
  position: absolute;
  top: 50%;
  ${props => (props.left ? "left: 30px;" : "right: 30px;")}
  font-size: 40px;
  color: #fff;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
const show = keyframes`
    from {
      opacity: 0;
      transform: translateY(100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  `

export const Show = styled.div`
  animation: ${show} 0.2s linear;
`
