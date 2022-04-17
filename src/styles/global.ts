import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  ${({ theme, removeBg }) => css`
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
      ${!removeBg &&
      css`
        background-color: ${theme.colors.dark_blue};
      `}
    }
  `}
`

export { GlobalStyles }
