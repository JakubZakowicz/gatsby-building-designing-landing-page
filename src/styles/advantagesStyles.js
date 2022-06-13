import styled from "styled-components"

export const ViewBtn = styled.button`
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

export const AdvantagesContainer = styled.div`
  background: #000;
  color: #fff;
  width: 70%;
  padding: 80px 0 175px 0;
  margin-top: 250px;
  font-weight: lighter;

  .margin {
    width: 50%;
    margin: auto;
  }

  h1,
  h2 {
    text-transform: uppercase;
    transition: all 1s ease-in-out;
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
    margin-top: 45px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 0;

    .margin {
      width: 100%;
      padding-left: 20px;
    }
  }
`