import { useState, useEffect } from 'react'
import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'
import { ThemeProvider } from 'next-themes'
import { GlobalStyle } from '../styles/GlobalStyle'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ArtProvider>
      <GlobalStyle />
      <ThemeProvider>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
              {isMounted && <Component {...pageProps} key={router.route} />}
          </AnimatePresence>
        </LazyMotion>
      </ThemeProvider>
    </ArtProvider>
  )
}

export default MyApp
