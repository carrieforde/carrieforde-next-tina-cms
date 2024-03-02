import type { Preview } from "@storybook/react";
import * as React from "react";
import { ibmPlexMono, libreFranklin } from "../src/theme/fonts/fonts";
import "../src/ui/styles/styles.css";
import "../src/theme/theme.css";
import "../src/ui/styles/global.css";

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add(libreFranklin.variable);
    document.documentElement.classList.add(ibmPlexMono.variable);
  }, []);

  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <Wrapper>{Story()}</Wrapper>],
};

export default preview;
