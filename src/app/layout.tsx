import { Layout } from "components";
import { ibmPlexMono, libreFranklin } from "theme/fonts/fonts";

import "ui/styles/styles.css";
import "theme/theme.css";
import "ui/styles/global.css";

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
