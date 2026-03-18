import React from "react";
import ParticlesBg from "particles-bg";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeroSection = ({ data }) => {
  if (!data) return null;

  const { name, description, resumedownload, github, linkedinUrl } = data;

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "clip",
        bgcolor: "#060D14",
      }}
    >
      {/* Particle background */}
      <ParticlesBg type="circle" bg={true} />

      {/* Hero content */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center", px: { xs: 3, md: 4 } }}>
        <Typography
          variant="overline"
          sx={{
            color: "secondary.main",
            fontSize: "0.8rem",
            letterSpacing: "3px",
            mb: 1.5,
            display: "block",
          }}
        >
          Senior Technology Leader · Principal Engineer · Fintech
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: "white",
            mb: 2,
            fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          {name}
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 3,
            bgcolor: "secondary.main",
            mx: "auto",
            mb: 2,
            borderRadius: 2,
          }}
        />

        <Typography
          variant="h4"
          sx={{
            color: "rgba(255,255,255,0.75)",
            fontWeight: 400,
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.6,
            maxWidth: 680,
            mx: "auto",
            mb: 3.5,
          }}
        >
          {description}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<DownloadIcon />}
            href={resumedownload}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "0.95rem",
              minWidth: 180,
            }}
          >
            Download CV
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<LinkedInIcon />}
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "0.95rem",
              minWidth: 180,
              borderColor: "rgba(0,201,167,0.6)",
              color: "secondary.main",
              "&:hover": {
                borderColor: "secondary.main",
                bgcolor: "rgba(0,201,167,0.1)",
              },
            }}
          >
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "0.95rem",
              minWidth: 180,
              borderColor: "rgba(255,255,255,0.35)",
              color: "rgba(255,255,255,0.8)",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.8)",
                bgcolor: "rgba(255,255,255,0.08)",
                color: "white",
              },
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Container>

      {/* Scroll down indicator */}
      <Box
        onClick={scrollToAbout}
        sx={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          opacity: 0.7,
          transition: "opacity 0.2s",
          "&:hover": { opacity: 1 },
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(6px)" },
          },
        }}
        aria-label="Scroll to about section"
      >
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)", letterSpacing: "2px", fontSize: "0.65rem" }}>
          SCROLL
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            color: "secondary.main",
            fontSize: "1.8rem",
            animation: "bounce 1.8s ease-in-out infinite",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
