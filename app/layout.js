import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/header";
import FooterWrapper from "../components/footerWrapper";
import Script from "next/script";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta
          name="keywords"
          content="Daylight, Daylighting, Research, Urban, Light, Environment, Laboratory, Oregon"
        />
        <meta name="author" content="Clotilde Pierson" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Daylighting Research Laboratory (RadiantLab)"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@PiersonClotilde" />
        <meta
          property="og:image"
          content="https://www.clotildepierson.com/preview.jpg"
        />
        <meta
          property="twitter:image"
          content="https://www.clotildepierson.com/preview.jpg"
        />
      </head>
      <body className="h-screen dark:bg-neutral-900 dark:text-gray-100 hover:a:text-sky-300">
        <Script
          defer
          data-domain="clotildepierson.com"
          src="/js/script.file-downloads.js"
          strategy="afterInteractive"
        />
        <div className="grid grid-cols-12">
          <Header />
          <main
            id="main-content"
            className="row-start-2 row-span-1 col-start-2 col-span-10"
          >
            {children}
            <SpeedInsights />
          </main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}

// export const metadata = {
//   title: "Home",
//   description: "Welcome to Next.js",
// };
