import { InternalLink } from "components/internal-link/internal-link";
import { Text } from "ui/components";
import { Logo } from "../logo/logo";
import { MainNavigation } from "../main-navigation/main-navigation";
import s from "./header.module.css";

export const Header: React.FC = () => (
  <header className={s.header}>
    <div className={s.branding}>
      <InternalLink href="/">
        <Logo />
        <Text className={s.title}>Carrie Forde</Text>
      </InternalLink>
    </div>
    <MainNavigation />
  </header>
);
