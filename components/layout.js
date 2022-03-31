import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";

export default function Layout({
  pageTitle,
  pageDescription,
  pageUrl,
  children,
}) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={pageDescription} key="desc" />
        {/* <meta property="og:image" content={previewImage} key="ogimage" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} key="ogurl" />
        <meta
          property="og:site_name"
          content="IRRADIANT LAB"
          key="ogsitename"
        />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={pageDescription}
          key="ogdesc"
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:title" content={pageTitle} key="twtitle" />
        <meta
          name="twitter:description"
          content={pageDescription}
          key="twdesc"
        />
        <meta
          name="twitter:creator"
          content="@PiersonClotilde"
          key="twhandle"
        />
        {/* <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
        </style> */}
      </Head>
      <Script
        defer
        data-domain="clotildepierson.com"
        src="https://plausible.io/js/plausible.js"
        strategy="afterInteractive"
      />
      <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] h-screen">
        <Header />
        <main className="row-start-2 row-span-1 col-start-2 col-span-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
