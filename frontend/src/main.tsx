import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { QueryClientProvider } from "@tanstack/react-query";

import "@fontsource/inter";
import "@fontsource/playfair-display";

import router from "./routes/AppRouter";
import theme from "./theme/theme";
import queryClient from "./utils/queryClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);