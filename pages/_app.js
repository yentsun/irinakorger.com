import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/globals.css';
import '@fontsource/roboto/cyrillic-400.css';


function App({ Component, pageProps }) {

    return <Layout>

        <SEO title={ process.env.siteTitle } />

        <Component {...pageProps} />

    </Layout>
}

export default App
