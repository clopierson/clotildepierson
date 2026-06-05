"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

const pageFooterData = {
  "/": {
    heroImageAuthorUrl: "http://www.karlmaasdam.com/",
    heroImageUrl: "https://oregonstate.edu/",
    heroImageAuthor: "Karl Maasdam",
  },
  "/software": {
    heroImageAuthorUrl: "http://www.karlmaasdam.com/",
    heroImageUrl: "https://oregonstate.edu/",
    heroImageAuthor: "Karl Maasdam",
  },
  "/team": {
    heroImageAuthorUrl: "http://www.karlmaasdam.com/",
    heroImageUrl: "https://oregonstate.edu/",
    heroImageAuthor: "Karl Maasdam",
  },
  "/publications": {
    heroImageAuthorUrl: "https://www.linkedin.com/in/erick-durano-21657b124/",
    heroImageUrl: "https://oregonstate.edu",
    heroImageAuthor: "Erick Durano",
  },
  "/research": {
    heroImageAuthorUrl: "https://www.linkedin.com/in/photosbyjade/",
    heroImageUrl: "https://oregonstate.edu",
    heroImageAuthor: "Jade Webster",
  },
  // TODO: add other pages as needed
};

export default function FooterWrapper() {
  const pathname = usePathname();
  const footerProps = pageFooterData[pathname] || {};

  return <Footer {...footerProps} />;
}
