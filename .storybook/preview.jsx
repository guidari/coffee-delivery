import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default";
import { GlobalStyle } from "../src/styles/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
