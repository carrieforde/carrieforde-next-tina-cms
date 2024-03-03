import { ImageProps } from "next/image";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Banner, BannerProps } from "ui/components";
import { Image } from "../image/image";

export const TINA_COMPONENTS = {
  Banner: ({
    children,
    variant,
  }: Pick<BannerProps, "variant"> & {
    children: TinaMarkdownContent | TinaMarkdownContent[];
  }) => (
    <Banner variant={variant}>
      <TinaMarkdown content={children} />
    </Banner>
  ),
  Image: ({ alt, ...props }: ImageProps) => (
    <Image alt={alt ?? ""} {...props} />
  ),
  // p: ({ children }: React.PropsWithChildren) => (
  //   <Text variant="body1">{children}</Text>
  // ),
};
