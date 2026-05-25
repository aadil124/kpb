import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D97706",
    },

    secondary: {
      main: "#B45309",
    },

    background: {
      default: "#FFFDF8",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },

    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },

    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14,
  },
});

export default theme;