import React from 'react'
import styled from 'styled-components'

import edkfPic from '../images/edkf.jpg'

const Image = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${edkfPic});
  backgorund-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
`

const Picture = (props) => (
  <Image style={{
    top: props.y + 'px',
    left: props.x + 'px'
  }}></Image>
)

export default Picture