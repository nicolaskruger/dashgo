import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'

import { QueryClient, QueryClientProvider } from "react-query";
if (process.env.NODE_ENV === "development") {
  makeServer()
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
