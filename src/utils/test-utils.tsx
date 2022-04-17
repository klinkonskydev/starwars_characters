import { RenderResult, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

const CustomRender = (ui: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

export { CustomRender as render }
