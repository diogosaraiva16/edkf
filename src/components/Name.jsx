import React from 'react'
import styled from 'styled-components'

const NameSpan = styled.span`
  cursor: grab;
`

const Name = (props) => (
  <NameSpan onMouseMove={props.onMouseMove} onMouseLeave={props.onMouseLeave} >Edgard Kozlowski</NameSpan>
)

export default Name