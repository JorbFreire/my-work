/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }

  a, button {
    cursor: pointer;
  }
`

export default GlobalStyles
