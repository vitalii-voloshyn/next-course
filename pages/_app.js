import NextNprogress from 'nextjs-progressbar'
import '../style/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNprogress
    color="yellow"
    startPosition="0.3"
    stopDelayMs="1700"
    height="3"
    />
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
