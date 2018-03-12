import styled from 'styled-components'
import colors from '../utils/colors'

const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;
  cursor: pointer;
  text-shadow: -2px -2px ${colors.black}, -2px 2px ${colors.black}, 2px -2px ${colors.black}, 2px 2px ${colors.black};
  background-size: 1px 1em;
  box-shadow: inset 0 -0.175em ${colors.black}, inset 0 -0.2em #333333;
  display: inline;
  transition: .3s ease;
  &:hover {
    box-shadow: inset 0 -0.175em ${colors.black}, inset 0 -0.2em ${colors.white};
  }
`

export default Link