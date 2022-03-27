import '../styles/globals.css'
import Head from "next/head"
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  	return (	
		<>
		<Head>
			{/* Primary Meta Tags */}
			<title>John Olatubosun</title>
			<meta name="title" content="John Olatubosun - Portfolio Website" />
			<meta name="description" content="Full Stack Developer, BE Heavy, Crypto and Blockchain Enthusiast, Lover Of Christ" />
			<meta name="theme-color" content="#33ccff"/>

			{/* Favicon */}
			<link rel="icon" type="image/png" href="/favicon.ico" />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.toluolatubosun.com/" />
			<meta property="og:title" content="John Olatubosun - Portfolio Website" />
			<meta property="og:description" content="Full Stack Developer, BE Heavy, Crypto and Blockchain Enthusiast, Lover Of Christ" />
			<meta property="og:image" content="https://www.toluolatubosun.com/site_preview.png" />
			
			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.toluolatubosun.com/" />
			<meta property="twitter:title" content="John Olatubosun - Portfolio Website" />
			<meta property="twitter:description" content="Full Stack Developer, BE Heavy, Crypto and Blockchain Enthusiast, Lover Of Christ" />
			<meta property="twitter:image" content="https://www.toluolatubosun.com/site_preview.png" />
		</Head>
		<Layout>
    		<Component {...pageProps} />
		</Layout>
		</>
  	)
}

export default MyApp
