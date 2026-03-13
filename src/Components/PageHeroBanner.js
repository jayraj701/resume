import React from "react";
import ParticlesBg from "particles-bg";
import { Box, Typography, Container } from "@mui/material";

const PageHeroBanner = ({ title, subtitle }) => (
  <Box
    sx={{
      position: "relative",
      height: { xs: 180, md: 240 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "#060D14",
      overflow: "hidden",
    }}
  >
    <ParticlesBg type="circle" bg={true} />
    <Container
      maxWidth="md"
      sx={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontSize: { xs: "1.8rem", md: "2.4rem" },
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.6)",
            mt: 1,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Container>
  </Box>
);

export default PageHeroBanner;
