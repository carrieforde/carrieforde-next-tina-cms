import * as React from "react";
import { Envelope, Github, Link, LinkedIn, Text, Ravelry } from "ui/components";
import { InternalLink } from "components/internal-link/internal-link";
import s from "./footer.module.css";

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <div className={s.copyright}>
      <InternalLink href="/privacy" color="inherit" className={s.link}>
        Privacy
      </InternalLink>
      <Text as="span" variant="finePrint">
        &bull;
      </Text>
      <Text as="span" variant="finePrint">
        Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
      </Text>
    </div>

    <ul className={s.menu}>
      <li>
        <Link color="primary" href="mailto:carrie@carrieforde.com">
          <Envelope />
        </Link>
      </li>
      <li>
        <Link color="primary" href="https://github.com/carrieforde">
          <Github />
        </Link>
      </li>
      <li>
        <Link href="https://www.ravelry.com/people/CarrieForde">
          <Ravelry />
        </Link>
      </li>
      <li>
        <Link href="https://linkedin.com/in/carrieforde">
          <LinkedIn />
        </Link>
      </li>
    </ul>
  </footer>
);
