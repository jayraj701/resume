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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const About = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    bio,
    address,
    phone,
    email,
    whatsapp,
    resumedownload,
    linkedinFollow,
  } = data;

  const profilepic = "images/" + image;

  const whatsappNumber = whatsapp ? whatsapp.replace(/\D/g, "") : "";

  const contactDetails = [
    { icon: <PersonIcon fontSize="small" />, label: "Name", value: name },
    {
      icon: <LocationOnIcon fontSize="small" />,
      label: "Location",
      value: `${address.city}, ${address.state}`,
    },
    {
      icon: <PhoneIcon fontSize="small" />,
      label: "Phone",
      value: (
        <MuiLink href={`tel:${phone.replace(/\s/g, "")}`} color="text.primary" underline="hover" fontWeight={500}>
          {phone}
        </MuiLink>
      ),
    },
    {
      icon: <EmailIcon fontSize="small" />,
      label: "Email",
      value: (
        <MuiLink href={`mailto:${email}`} color="secondary.main" underline="hover">
          {email}
        </MuiLink>
      ),
    },
    ...(whatsapp
      ? [
          {
            icon: <WhatsAppIcon />,
            label: "WhatsApp",
            value: (
              <MuiLink
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "#25D366", fontWeight: 500 }}
              >
                {whatsapp}
              </MuiLink>
            ),
          },
        ]
      : []),
  ];

  return (
    <Box component="section" id="about" sx={{ py: { xs: 5, md: 7 }, bgcolor: "white" }}>
      <Container maxWidth="lg">

        {/* ── Row 1: profile pic (30%) + about info (70%) ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 5 },
            alignItems: { md: "center" },
            mb: { xs: 5, md: 6 },
          }}
        >
          {/* 30% — profile picture */}
          <Box sx={{ flexShrink: 0, width: { xs: "100%", md: "30%" } }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(13,33,55,0.15)",
                maxWidth: { xs: 200, md: "100%" },
                mx: { xs: "auto", md: 0 },
                aspectRatio: "3 / 4",
              }}
            >
              <img
                src={profilepic}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>
          </Box>

          {/* 70% — name, buttons, contact */}
          <Box sx={{ flex: 1 }}>
            {/* Label + name */}
            <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 0.5 }}>
              About Me
            </Typography>
            <Typography variant="h2" color="primary.main" mb={1}>
              {name}
            </Typography>
            <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", borderRadius: 2, mb: 3 }} />

            {/* CTA buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mb={3}>
              <Button
                variant="contained"
                color="primary"
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
                size="large"
                startIcon={<LinkedInIcon />}
                href={linkedinFollow}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: "#0A66C2",
                  color: "#0A66C2",
                  "&:hover": { borderColor: "#0A66C2", bgcolor: "rgba(10,102,194,0.06)" },
                }}
              >
                Follow on LinkedIn
              </Button>
            </Stack>

            {/* Contact details */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: "background.default",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 2 }}>
                Contact Details
              </Typography>
              <Grid container spacing={1.5}>
                {contactDetails.map((item) => (
                  <Grid item xs={12} sm={6} key={item.label}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
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
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* ── Row 2: bio (full width) ── */}
        {bio && (
          <>
            <Divider sx={{ mb: 4 }} />
            <Box
              dangerouslySetInnerHTML={{ __html: bio }}
              sx={{
                color: "text.secondary",
                lineHeight: 1.9,
                "& h1, & h2": { color: "text.primary", mt: 3, mb: 1 },
                "& p": { mb: 2 },
                "& ul": { pl: 3, mb: 2 },
                "& li": { mb: 0.5 },
                "& strong": { color: "text.primary" },
                "& hr": { my: 3, borderColor: "divider" },
                "& .tech-stack span": {
                  display: "inline-block",
                  bgcolor: "action.hover",
                  borderRadius: 1,
                  px: 1,
                  py: 0.25,
                  mr: 0.5,
                  mb: 0.5,
                  fontSize: "0.85rem",
                },
              }}
            />
          </>
        )}

        <Divider sx={{ my: 4 }} />

        {/* Global experience flags */}
        <Typography variant="overline" color="text.secondary" sx={{ display: "block", mb: 2, textAlign: "center" }}>
          Global Experience
        </Typography>
        <Grid container spacing={1.5} justifyContent="center" sx={{ mb: 3 }}>
          {[
            { flag: "https://flagcdn.com/w40/gb.png", value: "8 Years", label: "United Kingdom" },
            { flag: "https://flagcdn.com/w40/ae.png", value: "1 Year", label: "UAE" },
            { flag: "https://flagcdn.com/w40/br.png", value: "20+ Team", label: "LATAM" },
            { flag: "https://flagcdn.com/w40/pt.png", value: "5+ Team", label: "Europe" },
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box component="img" src={item.flag} alt={item.label} sx={{ width: 36, height: 24, objectFit: "cover", borderRadius: "3px", mb: 0.75 }} />
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

        {/* Quick stats */}
        <Grid container spacing={2} justifyContent="center">
          {[
            { value: "13+", label: "Years Experience" },
            { value: "UK", label: "UK Experienced" },
            { value: "35+", label: "Team Members Led" },
          ].map((stat) => (
            <Grid item xs={4} key={stat.label}>
              <Box sx={{ textAlign: "center", p: 1.5 }}>
                <Typography variant="h3" sx={{ color: "secondary.main", fontWeight: 800, fontSize: "1.7rem" }}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default About;
