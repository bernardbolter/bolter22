import { useState, useEffect } from 'react'
import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'
import { GlobalStyles } from '../styles/themeConfig'

// import { light, dark, random } from '../themes/themes'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false)
  // const themes = { light: light, dark: dark, random: random }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // const themes = {
  //   light : lightTheme,
  //   dark : darkTheme,
  //   random : randomTheme 
  // }

  return (
    <ArtProvider>
      <GlobalStyles />
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
              {isMounted && <Component {...pageProps} key={router.route} />}
          </AnimatePresence>
        </LazyMotion>
    </ArtProvider>
  )
}

export default MyApp
