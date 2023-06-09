import Footer from '@/components/footer'
import NavLayout from '@/components/NavLayout'
import '@/styles/globals.css'
import AOS from 'aos';
import Head from 'next/head'
import 'aos/dist/aos.css';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';



export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ duration: 1000 });  }, 
    [])

  return (
    <>
      <Head>
        <title>Fargrance Palacio</title>
        <meta name="Fagrance Palacio" content="Think luxury scenting, remember Fragrance Palacio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavLayout />
      <NextNProgress color="#5e0993" startPosition={0.3} stopDelayMs={200} height={10} options={{ easing: 'ease', speed: 500, showSpinner: false }} showOnShallow={true} style={{ zIndex: 300000 }} />
      <Component {...pageProps} />
      <Footer/>
    </>

  )
}
