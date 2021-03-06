import { injectGlobal } from 'styled-components';

injectGlobal`
*, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  body {
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  @font-face {
      font-family: 'Helvetica', Arial;
    src: url('/fonts/HelveticaLTStd-Bold.woff2') format('woff2'),
    url('/fonts/HelveticaLTStd-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }
`
