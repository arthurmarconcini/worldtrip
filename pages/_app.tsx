import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import '../styles/globals.css'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Poppins, sans-serif'
      },
      a: {
        textDecoration: 'none'
      }
    }
  },
  colors: {
    text: {
      100: '#D9D9D9'
    },
    info: {
      100: '#DADADA',
      200: '#F5F8FA'
    },
    dark: {
      50: '#999999',
      100: '#47585B'
    },
    highlight: {
      100: '#FFBA08'
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
