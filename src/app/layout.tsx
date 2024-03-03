import { Layout } from "components";
import { ibmPlexMono, libreFranklin } from "theme/fonts/fonts";

import "ui/styles/styles.css";
import "ui/styles/global.css";
import "theme/theme.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Carrie Forde",
    default: "Carrie Forde",
  },
  description:
    "Carrie Forde is a front end software engineer in San Mateo, California who specializes in building elegant, maintainable, and performant websites.",
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
