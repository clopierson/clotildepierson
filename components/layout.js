import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";

export default function Layout({
  pageTitle,
  pageDescription,
  pageUrl,
  heroImageAuthorUrl,
  heroImageUrl,
  heroImageAuthor,
  children,
}) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="description" content={pageDescription} key="desc" />
        <meta
          name="keywords"
          content="Daylight, Daylighting, Research, Urban, Light, Environment, Laboratory, Oregon"
          key="keywords"
        />
        <meta name="author" content="Clotilde Pierson" key="author" />
        <meta
          property="og:image"
          content="https://clotildepierson.com/preview.png"
          key="ogimage"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} key="ogurl" />
        <meta
          property="og:site_name"
          content="Laboratory of Integrated Research on Daylighting (Irradiant Lab)"
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
      </Head>
      <Script
        defer
        data-domain="clotildepierson.com"
        src="/js/script.file-downloads.js"
        strategy="afterInteractive"
      />
      <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] h-screen">
        <Header />
        <main className="-z-10 row-start-2 row-span-1 col-start-2 col-span-10">
          {children}
        </main>
        <Footer
          heroImageAuthorUrl={heroImageAuthorUrl}
          heroImageUrl={heroImageUrl}
          heroImageAuthor={heroImageAuthor}
        />
      </div>
    </div>
  );
}
