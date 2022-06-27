import '../styles/globals.css'
import Topbar from '../components/Layout/Topbar'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
