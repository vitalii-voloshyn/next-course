import '../style/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
   {/* <style jsx global>{`
   body {
     font-family: 'Roboto', sans-serif;
     margin: 0;
     padding: 0;
   } 
   `}</style> */}
    </>
  ) 
}

export default MyApp
