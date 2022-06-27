import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Banner from '../components/Homepage/BannerSection'
import styles from '../styles/Home.module.css'
import Topbar from '../components/Layout/Topbar'
// import SustainableFeaturesSection from '../components/Homepage/SustainableFeaturesSection'

export default function Home() {
  return (
    <>
     <Head>

<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>TSC | Homepage</title>
{/* seo */}
<meta
  name="description"
  content="Oman Tourism Development Company (Omran) and Diamond Developers have joined forces to develop a world-class, mixed use project that meets the highest standards of social, environmental, and economic sustainability. Perched on the picturesque coastline, overlooking the Gulf of Oman, The Sustainable City Yiti (TSC Yiti) brings together a pioneering vision of sustainability and an unparalleled quality of community living to Oman. The project, designed to improve quality of life for residents, makes no compromises on the needs of future generations. Directed by some of the best thought leaders in the world, TSC Yiti presents opportunities for research and learning, empowering residents to lead the change towards minimizing our carbon footprint, realizing the goals of the future today."
/>
{/* Vendors CSS */}
<link
  rel="stylesheet"
  href="/assets/css/vendors/bootstrap.min.css"
  type="text/css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>
<link
  rel="stylesheet"
  href="/assets/css/vendors/bootstrap-select.min.css"
  type="text/css"
/>
<link
  rel="stylesheet"
  href="/assets/css/vendors/mCustomScrollbar.css"
  type="text/css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css"
  integrity="sha512-TD/aL30dNLN0VaHVoh9voFlNi7ZuWQYtV4bkIJv2ulZ8mEEkZJ7IyGvDthMKvIUwzLmPONnjQlAi55HTERVXpw=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
<link
  href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
  rel="stylesheet"
  type="text/css"
/>
{/* Fonts */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/npm/alga-js@0.1.0-wood-5"
  rel="stylesheet"
/>
{/* aos link  */}
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
{/* Custom CSS */}
<link href="/assets/css/custom.min.css" rel="stylesheet" type="text/css" />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link
  rel="stylesheet"
  href="https://intl-tel-input.com/node_modules/intl-tel-input/build/css/intlTelInput.css?1549804213570"
/>


      </Head>

      <Topbar />
      <Banner />
      {/* <SustainableFeaturesSection /> */}




    
    </>
  )
}
