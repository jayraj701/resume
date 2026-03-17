import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const SignatureProjectSection = ({ data }) => {
  if (!data) return null;

  const { title, subtitle, period, narrative, metrics, deliverables, caseStudyPath } = data;

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "primary.main",
        py: { xs: 8, md: 11 },
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Box sx={{ color: "secondary.main", display: "flex" }}>
              <AccountBalanceIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Signature Project
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              mb: 1.5,
              fontSize: { xs: "1.6rem", md: "2.2rem" },
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>
            {subtitle}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" mt={2} flexWrap="wrap" gap={1}>
            <Chip
              label={period}
              size="small"
              sx={{
                bgcolor: "rgba(0,201,167,0.15)",
                color: "secondary.main",
                border: "1px solid rgba(0,201,167,0.3)",
                fontWeight: 600,
              }}
            />
            {caseStudyPath && (
              <Button
                component={Link}
                to={caseStudyPath}
                variant="outlined"
                size="small"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: "secondary.main",
                  borderColor: "rgba(0,201,167,0.5)",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "secondary.main",
                    bgcolor: "rgba(0,201,167,0.1)",
                  },
                }}
              >
                View Case Study
              </Button>
            )}
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left: narrative + metrics */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.9,
                mb: 4,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              {narrative}
            </Typography>

            <Grid container spacing={2}>
              {metrics.map((metric, idx) => (
                <Grid item xs={6} key={idx}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      textAlign: "center",
                      transition: "background 0.2s",
                      "&:hover": { bgcolor: "rgba(0,201,167,0.12)" },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 800,
                        fontSize: { xs: "1.5rem", md: "1.9rem" },
                        mb: 0.5,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.75rem",
                        lineHeight: 1.4,
                        display: "block",
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right: deliverables */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,201,167,0.25)",
                backdropFilter: "blur(4px)",
                height: "100%",
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: "secondary.main", display: "block", mb: 2.5 }}
              >
                Key Deliverables
              </Typography>

              <Stack spacing={2}>
                {deliverables.map((item, idx) => (
                  <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleIcon
                      sx={{
                        color: "secondary.main",
                        fontSize: "1.1rem",
                        mt: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 3 }} />

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {["Mambu", "Azure", "AWS", "Microservices", "PCI DSS", "GDPR", "ClearBank", "Tink"].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignatureProjectSection;
