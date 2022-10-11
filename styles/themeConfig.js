import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html[data-theme="light"] {
    --color-text-primary: red;
    --color-bg-primary: white;
  }

  html[data-theme="dark"] {
    --color-text-primary: green;
    --color-bg-primary: ${newColor};
  }
`