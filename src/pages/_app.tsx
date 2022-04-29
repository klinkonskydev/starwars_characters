import Head from 'next/head'
import type { AppProps } from 'next/app'

import NextNProgress from 'nextjs-progressbar'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <NextNProgress
            color="#E6B13B"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
        </ThemeProvider>
    </>
  )
}
