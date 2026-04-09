import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AIChatProvider from "./ctx/providers/AIChatProvider.tsx";
import ThemeProvider from "./ctx/providers/ThemeProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <AIChatProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AIChatProvider>
    </BrowserRouter>

  </StrictMode>
);
