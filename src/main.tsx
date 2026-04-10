import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AIChatProvider from "@providers/AIChatProvider.tsx";
import ThemeProvider from "@providers/ThemeProvider.tsx";
import { ChatProvider } from "@providers/ChatProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AIChatProvider>
        <ChatProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ChatProvider>
      </AIChatProvider>
    </BrowserRouter>
  </StrictMode>,
);
