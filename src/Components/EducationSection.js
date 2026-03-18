import React from "react";
import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const EducationSection = ({ data }) => {
  if (!data || !data.education) return null;

  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
            Academic Foundation
          </Typography>
          <Typography variant="h2" color="primary.main">
            Education
          </Typography>
          <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 2, borderRadius: 2 }} />
        </Box>

        <Stack spacing={2} sx={{ maxWidth: 640, mx: "auto" }}>
          {data.education.map((edu) => (
            <Paper
              key={edu.school}
              elevation={0}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "flex-start",
                gap: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: "rgba(13,33,55,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                <SchoolIcon />
              </Box>
              <Box>
                <Typography variant="h4" color="primary.main" mb={0.25}>
                  {edu.school}
                </Typography>
                <Typography variant="body1" fontWeight={600} color="text.primary">
                  {edu.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  Graduated: {edu.graduated}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default EducationSection;
