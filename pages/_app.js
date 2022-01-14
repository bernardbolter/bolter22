import { LazyMotion, AnimatePresence, domAnimation, m } from 'framer-motion'

import ArtProvider from '../providers/ArtProvider'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  console.log(router)

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
          <m.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={myAnimation.transition}
            variants={myAnimation}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ArtProvider>
  )
}

export default MyApp
