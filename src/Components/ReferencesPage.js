import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import SiteAppBar from "./SiteAppBar";
import SiteFooter from "./SiteFooter";
import PageHeroBanner from "./PageHeroBanner";

const referenceImages = [
  {
    image: "images/paul.png",
    alt: "LinkedIn Recommendation — Paul Grey",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    image: "images/matt.png",
    alt: "LinkedIn Recommendation — Matt Smith",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    image: "images/dion.png",
    alt: "LinkedIn Recommendation — Dion Judge",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    image: "images/raphael.png",
    alt: "LinkedIn Recommendation — Raphael Yoshiga",
    linkedin: "https://www.linkedin.com/in/jayrajnimbalkar/details/recommendations/?detailScreenTabIndex=0",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "60px",
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "16px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "8px",
      },
    },
  ],
};

const ReferencesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <SiteAppBar />
      <PageHeroBanner
        title="References & Recommendations"
        subtitle="LinkedIn recommendations from colleagues, managers & clients"
      />

      <Box
        id="references"
        sx={{
          py: { xs: 6, md: 9 },
          bgcolor: "background.default",
          "& .slick-dots li button:before": {
            color: "secondary.main",
            fontSize: "8px",
          },
          "& .slick-dots li.slick-active button:before": {
            color: "secondary.main",
            opacity: 1,
          },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
              What People Say
            </Typography>
            <Typography variant="h2" color="primary.main">
              Social Proof
            </Typography>
            <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 2, borderRadius: 2 }} />
          </Box>

          <Slider {...sliderSettings}>
            {referenceImages.map((ref, idx) => (
              <Box key={idx} sx={{ px: 1.5 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    "&:hover .zoom-overlay": { opacity: 1 },
                  }}
                  onClick={() => { setModalOpen(true); setModalImg(ref); }}
                >
                  <img
                    src={ref.image}
                    alt={ref.alt}
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                  {/* Hover overlay */}
                  <Box
                    className="zoom-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(13,33,55,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.2s ease",
                    }}
                  >
                    <ZoomInIcon sx={{ color: "white", fontSize: "2.5rem" }} />
                  </Box>
                </Card>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<LinkedInIcon />}
                    href={ref.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      borderColor: "#0A66C2",
                      color: "#0A66C2",
                      fontSize: "0.8rem",
                      "&:hover": { borderColor: "#0A66C2", bgcolor: "rgba(10,102,194,0.06)" },
                    }}
                  >
                    View on LinkedIn
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>

      {/* Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, overflow: "hidden" } }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
            }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          {modalImg && (
            <img
              src={modalImg.image}
              alt={modalImg.alt}
              style={{ width: "100%", display: "block" }}
            />
          )}
        </DialogContent>
        <DialogActions sx={{ px: 2.5, py: 2 }}>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
          {modalImg && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href={modalImg.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on LinkedIn
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <SiteFooter />
    </>
  );
};

export default ReferencesPage;
