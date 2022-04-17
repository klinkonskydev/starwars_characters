import {
  createGlobalStyle,
  css,
} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.normal};
      font-weight: ${theme.font.weight.regular};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::after,
      &::before {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      color: ${theme.colors.white};
      background-color: ${theme.colors.dark_blue};
    }
  `}
`

export { GlobalStyles }
