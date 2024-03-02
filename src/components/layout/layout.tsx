import { Link } from "ui/components";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import s from "./layout.module.css";

type LayoutProps = React.PropsWithChildren;

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={s.layout}>
    <Link href="#content" variant="skipLink">
      Skip to content
    </Link>
    <Header />
    <main id="content" className={s.main}>
      {children}
    </main>
    <Footer />
  </div>
);
