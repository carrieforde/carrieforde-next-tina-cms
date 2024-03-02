import { LinkProps, Link } from "ui/components";
import NextLink from "next/link";

type InternalLinkProps = LinkProps;

export const InternalLink: React.FC<InternalLinkProps> = ({
  href,
  ...props
}) => (
  <NextLink href={href as string} legacyBehavior passHref>
    <Link {...props} />
  </NextLink>
);
