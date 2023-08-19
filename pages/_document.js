import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return <Html lang="en">
            <Head>
                <link href="https://fonts.tildacdn.com/get/?fonts=427,429,433,435&amp;format=woff2"
                      rel="stylesheet" type="text/css" media="all" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument;
