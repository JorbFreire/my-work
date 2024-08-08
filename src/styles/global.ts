/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.pallete.secondary.dark};
  }

  #__next {
    background-image: url('/backgrounds/waves_bottom.png');
    background-size: cover;
    background-attachment: fixed;
  }

  body, input, button {
    font-family: -apple-system, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a, button {
    cursor: pointer;
  }

  h2 {
    font-family: 'Gemunu Libre', 'Roboto', sans-serif;
  }
`

export default GlobalStyles
