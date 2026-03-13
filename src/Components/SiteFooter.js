import React from "react";
import { Box, Container, Typography, IconButton, Stack, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const socialIcons = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  instagram: <InstagramIcon />,
  github: <GitHubIcon />,
};

const SiteFooter = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: { xs: 4, md: 5 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
        >
          {/* Brand */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" fontWeight={800} sx={{ color: "white", mb: 0.5 }}>
              Jayraj Nimbalkar
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>
              Senior Technology Leader · Principal Engineer · Fintech
            </Typography>
          </Box>

          {/* Social links */}
          {data && data.social && (
            <Stack direction="row" spacing={0.5}>
              {data.social.map((network) => (
                <IconButton
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={network.name}
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    "&:hover": {
                      color: "secondary.main",
                      bgcolor: "rgba(255,255,255,0.08)",
                    },
                    transition: "color 0.2s, background 0.2s",
                  }}
                >
                  {socialIcons[network.name] || null}
                </IconButton>
              ))}
            </Stack>
          )}

          {/* Scroll to top */}
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 2,
              "&:hover": {
                color: "secondary.main",
                borderColor: "secondary.main",
                bgcolor: "rgba(0,201,167,0.1)",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 3 }} />

        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.35)",
            display: "block",
            textAlign: "center",
            fontSize: "0.75rem",
          }}
        >
          &copy; {new Date().getFullYear()} Jayraj Nimbalkar. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default SiteFooter;
