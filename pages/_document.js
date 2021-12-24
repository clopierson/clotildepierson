import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body class="h-screen text-slate-800 dark:bg-slate-800 dark:text-slate-100 hover:a:text-sky-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument