import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

function Advantages() {
  return (
    <AdvantagesContainer>
      <div>
          <h2>advantages</h2>
          <h1>working on <br /> exclusive projects</h1>

          <p>Designing sustainable, high-performance buildings requires an integration of architectural and engineered systems into a balanced design of sustainability an cost-effectiveness. Archus merges these practices with the unique requirements and guidelines necessary for advanced technology facilities.</p>

          <ViewBtn>view more</ViewBtn>
      </div>
    </AdvantagesContainer>
  )
}

export default Advantages

const ViewBtn = styled.button`
  background: transparent;
  color: #e18f2f;
  border: 1px solid #e18f2f;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  padding: 20px 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 20px;

  &:hover {
    background: #e18f2f;
    color: #fff;
  }
`

const AdvantagesContainer = styled.div`
    background: #000;
    color: #fff;
    width: 70%;
    padding: 80px 0 175px 0;
    margin-top: 250px;
    font-weight: lighter;
    
    div {
        width: 50%;
        margin: auto;
    }

    h1, h2 {
        text-transform: uppercase;
    }

    h1 {
        font-size: 35px;
    }

    h2 {
        font-family: "Montserrat", Sans-serif;
        font-size: 20px;
        font-weight: lighter;
    }

    p {
        font-family: "Montserrat", Sans-serif;
        line-height: 30px;
        width: 70%;
    }

    @media (max-width: 767px) {
      width: 100%;
      margin-top: 0;

      div {
        width: 100%;
        padding-left: 20px;
      }
    } 
`