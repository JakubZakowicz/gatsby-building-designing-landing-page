import styled from "styled-components"

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`

export const Title = styled.div`
  width: 25%;
  text-transform: uppercase;

  h4 {
    font-size: 15px;
    font-weight: lighter;
    transition: all 1s ease-in-out;
  }

  h2 {
    font-size: 40px;
    font-weight: bolder;
    letter-spacing: 3px;
    transition: all 1s ease-in-out;
  }
`

export const Description = styled.div`
  font-family: "Montserrat", Sans-serif;
  margin-top: 65px;
  margin-left: 20px;
  line-height: 25px;
  width: 65%;
`

export const AboutContainer = styled.div`
  position: relative;

  @media (max-width: 767px) {
    ${TitleContainer} {
      display: block;
      width: 100%;

      ${Title} {
        display: block;
        width: 70%;

        h4,
        h2 {
          padding-left: 12px;
        }

        span {
          left: 12px;
        }
      }

      ${Description} {
        width: 96%;
        margin-left: 0;

        p {
          padding: 0 12px;
        }
      }
    }
  }
`