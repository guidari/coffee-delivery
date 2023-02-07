import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
