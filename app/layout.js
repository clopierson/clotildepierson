import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import FooterWrapper from "../components/footer-wrapper";
import Header from "../components/header";
import { rootMetadata } from "../lib/metadata";

export const metadata = rootMetadata;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className="h-screen hover:a:text-sky-300 dark:bg-neutral-900 dark:text-gray-100">
        <Script
          data-domain="clotildepierson.com"
          defer
          src="/js/script.file-downloads.js"
          strategy="afterInteractive"
        />
        <div className="grid grid-cols-12">
          <Header />
          <main
            className="col-span-10 col-start-2 row-span-1 row-start-2"
            id="main-content"
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
