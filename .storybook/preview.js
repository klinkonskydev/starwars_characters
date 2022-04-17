import { ThemeProvider } from "styled-components"

import theme from 'styles/theme'
import { GlobalStyles } from 'styles/global'

export const parameters = {
  backgrounds: {
    default: 'dark-characters',
    values: [
      {
        name: 'dark-characters',
        value: theme.colors.dark_blue
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
