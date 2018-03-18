import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import ReactCursorPosition from 'react-cursor-position'
import responsive from '../utils/responsive'
import ReactGA from 'react-ga'
import Head from '../meta/Head'
import About from './About'
import Contact from './Contact'

ReactGA.initialize('UA-54127697-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${responsive(20, 150, 320, 1280)} 0 ${responsive(20, 50, 320, 1280)} 0;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: ${props => props.isInverted ? '0' : '.3s ease;'};
`

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      isInverted: false,
      color: colors.white,
      backgroundColor: colors.black
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 500)
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
        <Wrapper visible={this.state.isLoaded} isInverted={this.state.isInverted}>
          <ReactCursorPosition>
            <About
              isLoaded={this.state.isLoaded}
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
