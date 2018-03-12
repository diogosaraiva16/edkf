import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import responsive from '../utils/responsive'
import ReactCursorPosition from 'react-cursor-position'
import Head from '../meta/Head'
import About from './About'
import Contact from './Contact'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${responsive(20, 150, 320, 1280)} 0 ${responsive(20, 50, 320, 1280)} 0;
  opacity: 1;
`

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isInverted: false,
      color: colors.white,
      backgroundColor: colors.black
    }
  }

  invertColors () {
    this.setState({
      isInverted: true,
      color: colors.black,
      backgroundColor: colors.white
    })
  }

  leaveName () {
    this.setState({
      isInverted: false,
      color: colors.white,
      backgroundColor: colors.black
    })
  }

  render() {
    return (
      <div style={{color: this.state.color, backgroundColor: this.state.backgroundColor}}>
        <Head/>
        <Wrapper>
          <ReactCursorPosition>
            <About
              isInverted={this.state.isInverted}
              invertColors={this.invertColors.bind(this)}
              leaveName={this.leaveName.bind(this)}
            />
          </ReactCursorPosition>
          <Contact/>
        </Wrapper>
      </div>
    )
  }
}

export default App;
