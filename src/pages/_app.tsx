import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'

import MUITheme from 'styles/material-ui-theme'
import theme from 'styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <MUIThemeProvider theme={MUITheme}>
          <GlobalStyles />
          <Component {...pageProps} />
          <NextNProgress
            color="#E6B13B"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
        </MUIThemeProvider>
      </ThemeProvider>
    </>
  )
}
