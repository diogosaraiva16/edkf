import React, { Component } from 'react'
import styled from 'styled-components'

import Name from './Name'
import responsive from '../utils/responsive'
import If from '../utils/If'

import Picture from './Picture.jsx'
import Link from '../styled-components/Link'

const Paragraph = styled.p`
  font-family: 'Helvetica, Arial, sans-serif';
  font-size: ${responsive(24, 134, 320, 1280)};
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: ${responsive(0, -2, 320, 1280)};
  font-feature-settings:"kern" 1;
  font-kerning: normal;
  font-feature-settings:"onum" 1, "pnum" 1, "kern" 1, "ss01" 1;
  margin: 0 0 ${responsive(20, 130, 320, 1280)} 0;
`

class About extends Component {

  render() {
    return (
      <div style={{position: 'relative'}}>
        <Paragraph>Hi, my name is <Name onMouseMove={this.props.invertColors} onMouseLeave={this.props.leaveName} />. I'm a designer & developer who is in love with the intersection between design and technology.</Paragraph>
        <Paragraph>At the moment, <br/> I’m working as a Designer at <Link href="https://descomplica.com.br/" target="_blank" rel="noopener noreferrer">Descomplica</Link>.</Paragraph>
        <Paragraph>I spend most of my time <Link href="https://dribbble.com/edkf/" target="_blank" rel="noopener noreferrer">designing</Link> digital products, <Link href="https://www.facebook.com/groups/169442630324808/" target="_blank" rel="noopener noreferrer">talking</Link> about Framer, writing <Link href="https://github.com/edkf/" target="_blank" rel="noopener noreferrer">code</Link>, taking <Link href="https://www.instagram.com/edkf/" target="_blank" rel="noopener noreferrer">photographs</Link> and <Link href="https://twitter.com/edkf" target="_blank" rel="noopener noreferrer">tweeting</Link>.</Paragraph>
        <Paragraph>If you'd like to get in touch, feel free to send an <Link href="mailto:hello@edkf.com.br?subject=Hi%20Edgard">e-mail</Link>.</Paragraph>
        <If test={this.props.isInverted}>
          <Picture x={this.props.position.x - 175} y={this.props.position.y  - 175} />
        </If>
      </div>
    );
  }
}

export default About