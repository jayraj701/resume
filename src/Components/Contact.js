import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = ({ data }) => {
  if (!data) return null;

  const { address, phone, email, contactmessage, linkedinUrl } = data;

  const contactItems = [
    {
      icon: <LocationOnIcon sx={{ fontSize: "2rem" }} />,
      label: "Location",
      value: `${address.city}, ${address.state}`,
      sub: address.zip,
      sub2: "🇬🇧 UK Experienced · 🇦🇪 Dubai",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: "2rem" }} />,
      label: "Phone",
      value: phone,
    },
    {
      icon: <EmailIcon sx={{ fontSize: "2rem" }} />,
      label: "Email",
      value: (
        <MuiLink href={`mailto:${email}`} color="inherit" underline="hover">
          {email}
        </MuiLink>
      ),
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
            Let's Connect
          </Typography>
          <Typography variant="h2" color="primary.main" mb={2}>
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 480, mx: "auto", lineHeight: 1.8 }}
          >
            {contactmessage}
          </Typography>
          <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 3, borderRadius: 2 }} />
        </Box>

        {/* Contact cards */}
        <Grid container spacing={3} justifyContent="center" mb={5}>
          {contactItems.map((item) => (
            <Grid item xs={12} sm={4} key={item.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  height: "100%",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(13,33,55,0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ color: "secondary.main", mb: 1.5 }}>
                  {item.icon}
                </Box>
                <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="body1" color="text.primary" fontWeight={600}>
                  {item.value}
                </Typography>
                {item.sub && (
                  <Typography variant="body2" color="text.secondary">
                    {item.sub}
                  </Typography>
                )}
                {item.sub2 && (
                  <Typography variant="caption" color="text.disabled" sx={{ display: "block", mt: 0.5 }}>
                    {item.sub2}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<EmailIcon />}
            href={`mailto:${email}`}
            sx={{ px: 4, py: 1.5, minWidth: 200 }}
          >
            Send an Email
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<LinkedInIcon />}
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              minWidth: 200,
              borderColor: "#0A66C2",
              color: "#0A66C2",
              "&:hover": {
                borderColor: "#0A66C2",
                bgcolor: "rgba(10,102,194,0.06)",
              },
            }}
          >
            Connect on LinkedIn
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
