import '../styles/globals.css'
import {ThemeProvider} from 'styled-components';
import '../styles/layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
const theme = {
  colors: {
    primary:'blue',
  }
}
function MyApp({ Component, pageProps }) {

  const head = (<Head>
    <title>Second Next js App</title>
    <meta name='second js App' content='Next js app with several features' />
  </Head>)

  if(Component.getLayout){
    return Component.getLayout(
      <ThemeProvider theme={theme}>
        {head}
        <div className='content'>
          <Component {...pageProps}  />
        </div>
        
      </ThemeProvider>
    )
  }
  return <ThemeProvider theme={theme}>
    {head}
    <Header/>
      <div className='content'>
        <Component {...pageProps}  />
      </div>
    <Footer/>
  </ThemeProvider>
}

export default MyApp
