import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta key="theme-color" name="theme-color" content="#2BD0D0" />
          <link key="favicon" rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.google.com/share?selection.family=Poppins:wght@500;700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://fonts.google.com/share?selection.family=Poppins:wght@500;700
