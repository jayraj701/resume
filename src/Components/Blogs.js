import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
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

  useEffect(() => {
    if (blogProjects.length > 0) {
      const timer = setInterval(() => {
        setCurrent((c) => (c + 1) % blogProjects.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [blogProjects.length]);

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
              {/* Desktop: 3-card carousel */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <IconButton
                    onClick={prev}
                    sx={{
                      bgcolor: "white",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": { bgcolor: "primary.main", color: "white" },
                      flexShrink: 0,
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>

                  <Grid container spacing={3} sx={{ flex: 1 }}>
                    {getVisible().map((project, idx) => (
                      <Grid item xs={12} md={4} key={idx}>
                        <Card sx={{ height: "100%" }}>
                          <CardActionArea
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                          >
                            <CardMedia
                              component="img"
                              height={180}
                              image={"images/portfolio/" + project.image}
                              alt={project.title}
                              sx={{ objectFit: "cover" }}
                            />
                            <CardContent sx={{ flex: 1, p: 2.5 }}>
                              <Chip
                                label={project.category}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(0,201,167,0.1)",
                                  color: "secondary.dark",
                                  fontWeight: 600,
                                  fontSize: "0.72rem",
                                  mb: 1.5,
                                }}
                              />
                              <Typography variant="h5" color="primary.main" sx={{ lineHeight: 1.4 }}>
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
                      </Grid>
                    ))}
                  </Grid>

                  <IconButton
                    onClick={next}
                    sx={{
                      bgcolor: "white",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": { bgcolor: "primary.main", color: "white" },
                      flexShrink: 0,
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Stack>
              </Box>

              {/* Mobile: single card */}
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Stack spacing={3}>
                  {blogProjects.map((project, idx) => (
                    <Card key={idx}>
                      <CardActionArea
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          component="img"
                          height={180}
                          image={"images/portfolio/" + project.image}
                          alt={project.title}
                          sx={{ objectFit: "cover" }}
                        />
                        <CardContent sx={{ p: 2.5 }}>
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{ bgcolor: "rgba(0,201,167,0.1)", color: "secondary.dark", fontWeight: 600, mb: 1 }}
                          />
                          <Typography variant="h5" color="primary.main">
                            {project.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Stack>
              </Box>
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
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                  mx: { xs: "auto", md: 0 },
                  maxWidth: { xs: 280, md: "100%" },
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
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                <PictureAsPdfIcon sx={{ color: "secondary.main", fontSize: "1.5rem" }} />
                <Typography variant="overline" sx={{ color: "secondary.main" }}>
                  Technical White Paper
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  mb: 2,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                }}
              >
                Direct Debit Payment Automation
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.75)", mb: 4, lineHeight: 1.85 }}
              >
                An in-depth architectural white paper exploring best practices, integration patterns, and implementation strategies for automating Direct Debit payment flows in regulated financial services environments.
              </Typography>

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
            </Grid>
          </Grid>
        </Container>
      </Box>

      <SiteFooter />
    </>
  );
};

export default Blogs;
