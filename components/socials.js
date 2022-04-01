// import { Twitter, Linkedin } from "react-feather";

export default function Socials() {
  return (
    <div>
      <a href="mailto:clotilde.pierson@oregonstate.edu">
        clotilde.pierson@oregonstate.edu
      </a>
      <br></br>
      <a
        href="https://www.researchgate.net/profile/Clotilde-Pierson"
        target="_blank"
        rel="noreferrer noopener"
      >
        Research Gate
      </a>{" "}
      /{" "}
      <a
        href="https://scholar.google.com/citations?user=X8aroEgAAAAJ&hl=fr&oi=ao"
        target="_blank"
        rel="noreferrer noopener"
      >
        Google Scholar
      </a>{" "}
      <span className="hidden sm:inline md:hidden lg:inline"> / </span>{" "}
      <br className="sm:hidden md:inline lg:hidden"></br>
      <a
        href="https://www.linkedin.com/in/clotilde-pierson/"
        target="_blank"
        rel="noreferrer noopener"
      >
        LinkedIn
        {/* <Linkedin className="inline" /> */}
      </a>{" "}
      /{" "}
      <a
        href="https://twitter.com/PiersonClotilde"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
        {/* <Twitter className="inline" /> */}
      </a>
    </div>
  );
}
