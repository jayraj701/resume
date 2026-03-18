import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SiteAppBar from "./SiteAppBar";
import SiteFooter from "./SiteFooter";
import PageHeroBanner from "./PageHeroBanner";

const Blogs = () => {
  const [blogProjects, setBlogProjects] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/resumeData.json")
      .then((r) => r.json())
      .then((data) => {
        if (data?.portfolio?.projects) {
          setBlogProjects(data.portfolio.projects);
        }
      })
      .catch(console.error);
  }, []);


  const prev = () => setCurrent((c) => (c - 1 + blogProjects.length) % blogProjects.length);
  const next = () => setCurrent((c) => (c + 1) % blogProjects.length);

  // Show 3 cards cycling
  const getVisible = () => {
    if (blogProjects.length === 0) return [];
    return [0, 1, 2].map((i) => blogProjects[(current + i) % blogProjects.length]);
  };

  return (
    <>
      <SiteAppBar />
      <PageHeroBanner
        title="Thought Leadership"
        subtitle="Technical articles, architecture insights & white papers"
      />

      {/* Blog articles */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
              Articles & Tutorials
            </Typography>
            <Typography variant="h2" color="primary.main">
              Featured Blog Posts
            </Typography>
            <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 2, borderRadius: 2 }} />
          </Box>

          {blogProjects.length > 0 && (
            <>
              {/* Carousel — 3 visible on desktop, 1 on mobile */}
              <Stack direction="row" alignItems="stretch" spacing={2}>
                <IconButton
                  onClick={prev}
                  sx={{
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "divider",
                    alignSelf: "center",
                    flexShrink: 0,
                    "&:hover": { bgcolor: "primary.main", color: "white" },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>

                {/* Viewport — clips overflow */}
                <Box sx={{ flex: 1, overflow: "hidden" }}>
                  <Box
                    sx={{
                      display: "flex",
                      transition: "transform 0.4s ease",
                      transform: {
                        xs: `translateX(calc(-${current * 100}%))`,
                        md: `translateX(calc(-${current * (100 / 3)}%))`,
                      },
                    }}
                  >
                    {blogProjects.map((project, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          flex: { xs: "0 0 100%", md: "0 0 33.333%" },
                          px: 1.5,
                          boxSizing: "border-box",
                        }}
                      >
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        >
                          <CardActionArea
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                          >
                            <CardMedia
                              component="img"
                              image={"images/portfolio/" + project.image}
                              alt={project.title}
                              sx={{ height: 180, width: "100%", objectFit: "cover", flexShrink: 0 }}
                            />
                            <CardContent sx={{ flex: 1, p: 2.5, display: "flex", flexDirection: "column" }}>
                              <Chip
                                label={project.category}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(0,201,167,0.1)",
                                  color: "secondary.dark",
                                  fontWeight: 600,
                                  fontSize: "0.72rem",
                                  mb: 1.5,
                                  alignSelf: "flex-start",
                                }}
                              />
                              <Typography
                                variant="h5"
                                color="primary.main"
                                sx={{ lineHeight: 1.4, flex: 1 }}
                              >
                                {project.title}
                              </Typography>
                              <Stack direction="row" alignItems="center" spacing={0.5} mt={1.5}>
                                <OpenInNewIcon sx={{ fontSize: "0.9rem", color: "secondary.main" }} />
                                <Typography variant="caption" color="secondary.main" fontWeight={600}>
                                  Read on Medium
                                </Typography>
                              </Stack>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <IconButton
                  onClick={next}
                  sx={{
                    bgcolor: "white",
                    border: "1px solid",
                    borderColor: "divider",
                    alignSelf: "center",
                    flexShrink: 0,
                    "&:hover": { bgcolor: "primary.main", color: "white" },
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Stack>

              {/* Dot indicators */}
              <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                {blogProjects.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    sx={{
                      width: idx === current ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      bgcolor: idx === current ? "secondary.main" : "divider",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Container>
      </Box>

      {/* White paper section */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          bgcolor: "primary.main",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="sm">
          <Stack alignItems="center" textAlign="center" spacing={3}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <PictureAsPdfIcon sx={{ color: "secondary.main", fontSize: "1.5rem" }} />
              <Typography variant="overline" sx={{ color: "secondary.main" }}>
                Technical White Paper
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              sx={{ color: "white", fontSize: { xs: "1.6rem", md: "2rem" } }}
            >
              Direct Debit Payment Automation
            </Typography>

            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85 }}>
              An in-depth architectural white paper exploring best practices, integration patterns, and implementation strategies for automating Direct Debit payment flows in regulated financial services environments.
            </Typography>

            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                maxWidth: 280,
                width: "100%",
              }}
            >
              <a
                href="https://jayresume.blob.core.windows.net/resume/Direct_Debit_Payment_Automation_WhitePaper_I.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                <img
                  src="images/DDCoverP.png"
                  alt="Direct Debit Payment Automation White Paper"
                  style={{ width: "100%", display: "block" }}
                />
              </a>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PictureAsPdfIcon />}
              href="https://jayresume.blob.core.windows.net/resume/Direct_Debit_Payment_Automation_WhitePaper_I.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ px: 4, py: 1.5 }}
            >
              Download White Paper
            </Button>
          </Stack>
        </Container>
      </Box>

      <SiteFooter />
    </>
  );
};

export default Blogs;
