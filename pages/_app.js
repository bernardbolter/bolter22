import ArtProvider from '../providers/ArtProvider'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ArtProvider>
      <Component {...pageProps} />
    </ArtProvider>
  )
}

export default MyApp
