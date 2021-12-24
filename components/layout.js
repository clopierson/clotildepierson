import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ pageTitle, pageDescription, children }) {
    return (
      <div>
        <Head>
          <title>{pageTitle}</title>
          <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
          <meta property="og:title" content={pageTitle} key="title" />
          <meta property="og:description" content={pageDescription} key="description" />
        </Head>
        <div class="grid grid-cols-12 grid-rows-[auto_1fr_auto] h-screen">
          <Header/>
          <main class="row-start-2 row-span-1 col-start-2 col-span-10">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }