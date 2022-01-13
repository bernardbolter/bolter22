import { LazyMotion, AnimatePresence, domAnimation, m } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <ArtProvider>
          <Component {...pageProps} />
        </ArtProvider>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default MyApp
