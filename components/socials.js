// import { Twitter, Linkedin } from "react-feather";

export default function Socials() {
  return (
    <div>
      <a
        className="inline-block min-h-6 py-0.5"
        href="mailto:clotilde.pierson@oregonstate.edu"
      >
        clotilde.pierson@oregonstate.edu
      </a>
      <br />
      <a
        href="https://www.researchgate.net/profile/Clotilde-Pierson"
        rel="noreferrer noopener"
        target="_blank"
      >
        Research Gate
      </a>{" "}
      /{" "}
      <a
        href="https://scholar.google.com/citations?user=X8aroEgAAAAJ&hl=fr&oi=ao"
        rel="noreferrer noopener"
        target="_blank"
      >
        Google Scholar
      </a>{" "}
      <span className="hidden sm:inline md:hidden lg:inline"> / </span>{" "}
      <br className="sm:hidden md:inline lg:hidden" />
      <a
        href="https://www.linkedin.com/in/clotilde-pierson/"
        rel="noreferrer noopener"
        target="_blank"
      >
        LinkedIn
        {/* <Linkedin className="inline" /> */}
      </a>{" "}
      /{" "}
      <a
        href="https://x.com/PiersonClotilde"
        rel="noreferrer noopener"
        target="_blank"
      >
        X{/* <Twitter className="inline" /> */}
      </a>
    </div>
  );
}
