import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Poppins:wght@200;300;400;600&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}