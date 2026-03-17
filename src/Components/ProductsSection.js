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
  Paper,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

// ─── Status badge colours ─────────────────────────────────────────────────────

const STATUS_STYLE = {
  Live: { bg: "rgba(46,204,113,0.13)", color: "#27AE60", border: "rgba(46,204,113,0.35)" },
  "In Development": { bg: "rgba(0,201,167,0.12)", color: "#00A88D", border: "rgba(0,201,167,0.3)" },
  Beta: { bg: "rgba(230,126,34,0.12)", color: "#E67E22", border: "rgba(230,126,34,0.3)" },
};

// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard = ({ product }) => {
  const statusStyle = STATUS_STYLE[product.status] || STATUS_STYLE.Live;
  const summaryParagraphs = product.summary.split("\n\n");
  const caseStudyPath = product.caseStudyPath || `/case-studies/${product.id}`;

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          transition: "box-shadow 0.25s",
          "&:hover": { boxShadow: "0 8px 40px rgba(13,33,55,0.11)" },
        }}
      >
        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 220, md: 360 },
            position: "relative",
            overflow: "hidden",
            // Gradient fallback — silently replaced when image loads
            background:
              "linear-gradient(145deg, #060D14 0%, #0D2137 55%, #122840 100%)",
            backgroundImage: [
              // Text-readability overlay (bottom-to-top fade)
              "linear-gradient(to top, rgba(6,13,20,0.92) 0%, rgba(6,13,20,0.45) 45%, rgba(6,13,20,0.15) 100%)",
              // Hero image — CSS silently ignores missing URLs
              `url(${process.env.PUBLIC_URL}/${product.heroImage})`,
            ].join(", "),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Placeholder hint when no image */}
          <Box
            sx={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              opacity: 0.18,
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="caption" sx={{ color: "white", fontSize: "0.7rem" }}>
              {product.heroImage} · 1200 × 480 px
            </Typography>
          </Box>

          {/* Title content — pinned to bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: { xs: 3, md: 4 },
              zIndex: 1,
            }}
          >
            <Stack direction="row" flexWrap="wrap" gap={0.75} mb={1.25}>
              <Chip
                label={product.status}
                size="small"
                sx={{
                  bgcolor: statusStyle.bg,
                  color: statusStyle.color,
                  border: `1px solid ${statusStyle.border}`,
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  height: 22,
                  backdropFilter: "blur(4px)",
                }}
              />
              <Chip
                label={product.type}
                size="small"
                sx={{
                  bgcolor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: "0.7rem",
                  height: 22,
                  backdropFilter: "blur(4px)",
                }}
              />
              <Chip
                label={product.period}
                size="small"
                sx={{
                  bgcolor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: "0.7rem",
                  height: 22,
                  backdropFilter: "blur(4px)",
                }}
              />
            </Stack>

            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: { xs: "1.65rem", md: "2.1rem" },
                mb: 0.5,
                lineHeight: 1.2,
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              {product.tagline}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                display: "block",
                mt: 0.75,
                fontSize: "0.8rem",
                letterSpacing: "0.3px",
              }}
            >
              {product.role}
            </Typography>
          </Box>
        </Box>

        {/* ── Card Body ───────────────────────────────────────────────── */}
        <Box sx={{ p: { xs: 3, md: 4.5 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Left Column — Summary + Metrics + Tech Stack */}
            <Grid item xs={12} md={7}>
              {summaryParagraphs.map((para, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.9,
                    mb: 2,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {para}
                </Typography>
              ))}

              {/* Metrics Grid */}
              <Grid container spacing={1.5} sx={{ mt: 0.5 }}>
                {product.metrics.map((m, idx) => (
                  <Grid item xs={6} sm={3} key={idx}>
                    <Box
                      sx={{
                        p: { xs: 1.75, md: 2 },
                        borderRadius: 2,
                        bgcolor: "rgba(13,33,55,0.04)",
                        border: "1px solid rgba(13,33,55,0.1)",
                        textAlign: "center",
                        transition: "background 0.2s",
                        "&:hover": { bgcolor: "rgba(0,201,167,0.07)" },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "primary.main",
                          fontWeight: 800,
                          fontSize: { xs: "1.3rem", md: "1.5rem" },
                          mb: 0.25,
                        }}
                      >
                        {m.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.35,
                          display: "block",
                          fontSize: "0.7rem",
                        }}
                      >
                        {m.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Tech Stack */}
              <Box sx={{ mt: 3.5 }}>
                <Typography
                  variant="overline"
                  sx={{ color: "text.secondary", display: "block", mb: 1.5 }}
                >
                  Core Tech Stack
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.8}>
                  {product.techStack.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: "rgba(0,201,167,0.07)",
                        color: "primary.main",
                        border: "1px solid rgba(0,201,167,0.22)",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Right Column — Architecture Highlights + CTA */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2.5,
                  bgcolor: "rgba(13,33,55,0.03)",
                  border: "1px solid rgba(13,33,55,0.09)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "text.secondary", display: "block", mb: 2.5 }}
                >
                  Architecture Highlights
                </Typography>

                <Stack spacing={2.25} sx={{ flex: 1 }}>
                  {product.architectureHighlights.map((item, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          color: "secondary.main",
                          fontSize: "1.05rem",
                          mt: "3px",
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "primary.main",
                            mb: 0.3,
                            fontSize: "0.88rem",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.65,
                            display: "block",
                            fontSize: "0.78rem",
                          }}
                        >
                          {item.detail.length > 110
                            ? item.detail.slice(0, 110) + "…"
                            : item.detail}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={Link}
                  to={caseStudyPath}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 600 }}
                >
                  View Case Study
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const ProductsSection = ({ data }) => {
  if (!data || !data.products || data.products.length === 0) return null;

  return (
    <Box
      component="section"
      id="products"
      sx={{ bgcolor: "background.default", py: { xs: 8, md: 11 } }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <InventoryIcon sx={{ color: "secondary.main", fontSize: "1.8rem" }} />
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Products I Architected
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              color: "primary.main",
              mb: 1.5,
              fontSize: { xs: "1.7rem", md: "2.4rem" },
            }}
          >
            Platform Architecture Portfolio
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 660,
              lineHeight: 1.85,
            }}
          >
            End-to-end platforms I designed, built, and owned — from architecture
            decisions through to production delivery. These are products I
            architected in a CTO or Principal Engineer capacity, where I was
            accountable for the full technical stack.
          </Typography>
          <Divider sx={{ mt: 3.5 }} />
        </Box>

        {/* Product Cards */}
        <Stack spacing={6}>
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsSection;
