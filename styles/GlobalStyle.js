import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
    body {
      color: #000;
      background: #fff;
    }
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
    body {
      color: #fff;
      background: #000;
    }
  }
`