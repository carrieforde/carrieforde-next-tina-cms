import type { AppProps } from "next/app";
import { ibmPlexMono, libreFranklin } from "theme/fonts/fonts";

import "ui/styles/styles.css";
import "theme/theme.css";
import "ui/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-libre-franklin: ${libreFranklin.style.fontFamily};
          --font-family-ibm-plex-mono: ${ibmPlexMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
