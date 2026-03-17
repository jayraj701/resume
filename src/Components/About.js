import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const About = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    bio,
    address,
    phone,
    email,
    resumedownload,
    linkedinFollow,
  } = data;

  const profilepic = "images/" + image;
  const bioParagraphs = bio ? bio.split("\n\n").filter(Boolean) : [];

  const contactDetails = [
    { icon: <PersonIcon fontSize="small" />, label: "Name", value: name },
    {
      icon: <LocationOnIcon fontSize="small" />,
      label: "Location",
      value: `${address.city}, ${address.state}`,
    },
    { icon: <PhoneIcon fontSize="small" />, label: "Phone", value: phone },
    {
      icon: <EmailIcon fontSize="small" />,
      label: "Email",
      value: (
        <MuiLink href={`mailto:${email}`} color="secondary.main" underline="hover">
          {email}
        </MuiLink>
      ),
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="flex-start">
          {/* Left column: image + CTAs */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 100 } }}>
              {/* Profile image */}
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(13,33,55,0.15)",
                  mb: 3,
                  maxWidth: { xs: 280, md: "100%" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <img
                  src={profilepic}
                  alt={name}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
              </Box>

              {/* CTA buttons */}
              <Stack spacing={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  startIcon={<DownloadIcon />}
                  href={resumedownload}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  startIcon={<LinkedInIcon />}
                  href={linkedinFollow}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "#0A66C2",
                    color: "#0A66C2",
                    "&:hover": {
                      borderColor: "#0A66C2",
                      bgcolor: "rgba(10,102,194,0.06)",
                    },
                  }}
                >
                  Follow on LinkedIn
                </Button>
              </Stack>

              {/* Contact details */}
              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant="overline"
                  color="secondary.main"
                  sx={{ display: "block", mb: 2 }}
                >
                  Contact Details
                </Typography>
                <Stack spacing={1.5}>
                  {contactDetails.map((item) => (
                    <Stack key={item.label} direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ color: "primary.main", flexShrink: 0, mt: "2px" }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ lineHeight: 1.2, mb: 0.25 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.primary" fontWeight={500}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right column: bio */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="overline"
              color="secondary.main"
              sx={{ display: "block", mb: 1 }}
            >
              About Me
            </Typography>
            <Typography variant="h2" color="primary.main" mb={3}>
              {name}
            </Typography>
            <Box
              sx={{
                width: 50,
                height: 3,
                bgcolor: "secondary.main",
                mb: 4,
                borderRadius: 2,
              }}
            />

            {bioParagraphs.map((para, idx) => (
              <Typography
                key={idx}
                variant="body1"
                color="text.secondary"
                mb={2.5}
                sx={{ lineHeight: 1.9 }}
              >
                {para}
              </Typography>
            ))}

            <Divider sx={{ my: 3 }} />

            {/* Global presence flags */}
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 2 }}>
              Global Experience
            </Typography>
            <Grid container spacing={1.5} sx={{ mb: 3 }}>
              {[
                { flag: "🇬🇧", value: "8 Years", label: "United Kingdom" },
                { flag: "🇦🇪", value: "1 Year", label: "Dubai, UAE" },
                { flag: "🇧🇷", value: "20+ Team", label: "Brazil" },
                { flag: "🇵🇹", value: "5+ Team", label: "Portugal" },
              ].map((item) => (
                <Grid item xs={6} sm={3} key={item.label}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 1.75,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: "background.default",
                      transition: "border-color 0.2s",
                      "&:hover": { borderColor: "secondary.main" },
                    }}
                  >
                    <Typography sx={{ fontSize: "1.8rem", lineHeight: 1.2, mb: 0.5 }}>
                      {item.flag}
                    </Typography>
                    <Typography variant="body2" fontWeight={700} color="primary.main">
                      {item.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Quick stats row — centred */}
            <Grid container spacing={2} justifyContent="center">
              {[
                { value: "13+", label: "Years Experience" },
                { value: "UK", label: "UK Experienced" },
                { value: "35+", label: "Team Members Led" },
              ].map((stat) => (
                <Grid item xs={4} key={stat.label}>
                  <Box sx={{ textAlign: "center", p: 1.5 }}>
                    <Typography
                      variant="h3"
                      sx={{ color: "secondary.main", fontWeight: 800, fontSize: "1.7rem" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight={500}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
