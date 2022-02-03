import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {

  const myAnimation = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 1
    }
  }

  return (
    <ArtProvider>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </LazyMotion>
    </ArtProvider>
  )
}

export default MyApp
