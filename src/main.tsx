import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AIChatProvider from "@providers/AIChatProvider.tsx";
import ThemeProvider from "@providers/ThemeProvider.tsx";
import { ChatProvider } from "@providers/ChatProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AIChatProvider>
          <ChatProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ChatProvider>
        </AIChatProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
