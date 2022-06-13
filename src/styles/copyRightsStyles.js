import styled from "styled-components"
import { Link } from "gatsby"

export const CopyRightsContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 7px 0;

  .center {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;

    img {
      width: 120px;
    }
  }

  @media (max-width: 767px) {
    .center {
      flex-direction: column;
      padding: 20px 0;
    }
  }
`

export const SocialMedia = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-around;
`

export const SocialLink = styled(Link)`
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e18f2f;
  }
`
