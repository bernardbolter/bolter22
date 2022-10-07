import { useState, useEffect } from 'react'
import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme, GlobalStyles } from '../themeConfig'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('light')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ArtProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
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
