import { usePathname } from "next/navigation";

import { LinkProps } from "ui/components";

import { InternalLink } from "components/internal-link/internal-link";
import s from "./main-navigation.module.css";

type NavigationLinkProps = LinkProps;

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  ...props
}) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <InternalLink
      {...props}
      className={s.link}
      variant="navigation"
      isActive={isActive}
    >
      {children}
    </InternalLink>
  );
};

export const MainNavigation = () => (
  <nav className={s.mainNavigation}>
    <NavigationLink href="/blog">Blog</NavigationLink>
    <NavigationLink href="/components">Components</NavigationLink>
    <NavigationLink href="/wardrobe">Wardrobe</NavigationLink>
  </nav>
);
