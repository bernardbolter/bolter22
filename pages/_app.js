import { useState, useEffect } from 'react'
import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'
import ThemeStyleProvider from '../providers/ThemeStyleProvider'
import Theme from '../components/Theme'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ArtProvider>
      <LazyMotion features={domAnimation}>
        <ThemeStyleProvider>
          <Theme>
            <AnimatePresence>
                {isMounted && <Component {...pageProps} key={router.route} />}
            </AnimatePresence>
          </Theme>
        </ThemeStyleProvider>
      </LazyMotion>
    </ArtProvider>
  )
}

export default MyApp
