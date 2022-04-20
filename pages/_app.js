import '../styles/globals.css'
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return <Component {...pageProps} />
}

export default MyApp
