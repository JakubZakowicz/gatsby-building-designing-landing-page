import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

function Bar({ style }) {
  return <BarComponent style={style} />
}

export default Bar

const BarComponent = styled(animated.span)`
  position: absolute;
  width: 70px;
  height: 4px;
  background: #f7992b;
  border-radius: 10px;
  transition: all 1s ease-in-out;
`
