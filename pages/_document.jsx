// src/pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
        return (
            <Html>
                <Head />
                <body className={pageProps.isDark ? 'dark-mode' : 'bg-gray-50'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}