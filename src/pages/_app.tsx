import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClient, QueryClientProvider } from "react-query";

let isDevelopment = false;

if (process.env.NODE_ENV === "development") {
  makeServer()
  isDevelopment = true;
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {isDevelopment && <ReactQueryDevtools />}
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
