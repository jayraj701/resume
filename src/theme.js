import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D2137",
      light: "#1A3A5C",
      dark: "#060D14",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00C9A7",
      light: "#33D4B8",
      dark: "#008C75",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F4F6F9",
      paper: "#ffffff",
    },
    text: {
      primary: "#0D1B2A",
      secondary: "#4A5568",
    },
    success: {
      main: "#2ECC71",
    },
    divider: "#E2E8F0",
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
    h1: {
      fontSize: "clamp(2.4rem, 5vw, 4rem)",
      fontWeight: 800,
      letterSpacing: "-1.5px",
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h3: {
      fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.05rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.7,
    },
    overline: {
      fontSize: "0.72rem",
      letterSpacing: "2.5px",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.8rem",
      letterSpacing: "0.3px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#F4F6F9",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(13, 33, 55, 0.95)",
          boxShadow: "0 1px 20px rgba(13,33,55,0.25)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: "none",
          fontSize: "0.95rem",
          padding: "10px 24px",
          transition: "all 0.2s ease",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #0D2137 0%, #1A3A5C 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #1A3A5C 0%, #0D2137 100%)",
            boxShadow: "0 6px 20px rgba(13,33,55,0.35)",
            transform: "translateY(-1px)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #00C9A7 0%, #008C75 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #008C75 0%, #00C9A7 100%)",
            boxShadow: "0 6px 20px rgba(0,201,167,0.4)",
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: "#0D2137",
          "&:hover": {
            backgroundColor: "rgba(13,33,55,0.06)",
            transform: "translateY(-1px)",
          },
        },
        outlinedSecondary: {
          borderColor: "rgba(255,255,255,0.6)",
          color: "#ffffff",
          "&:hover": {
            borderColor: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(13,33,55,0.07)",
          transition: "box-shadow 0.25s ease, transform 0.25s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(13,33,55,0.15)",
            transform: "translateY(-3px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: "0.82rem",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E2E8F0",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
