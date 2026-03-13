import React from "react";
import { Box, Container, Typography, Chip, Grid, Paper, Stack } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const categoryIcons = {
  "Cloud & Infrastructure": <CloudIcon fontSize="small" />,
  "Languages & Frameworks": <CodeIcon fontSize="small" />,
  "Architecture & Methodology": <AccountTreeIcon fontSize="small" />,
};

const categoryColors = {
  "Cloud & Infrastructure": { bg: "rgba(0,120,212,0.08)", color: "#0078D4", border: "rgba(0,120,212,0.2)" },
  "Languages & Frameworks": { bg: "rgba(0,201,167,0.08)", color: "#008C75", border: "rgba(0,201,167,0.25)" },
  "Architecture & Methodology": { bg: "rgba(13,33,55,0.07)", color: "#0D2137", border: "rgba(13,33,55,0.15)" },
};

const SkillsSection = ({ data }) => {
  if (!data || !data.skillCategories) return null;

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
            Technical Expertise
          </Typography>
          <Typography variant="h2" color="primary.main">
            Skills & Technologies
          </Typography>
          <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 2, borderRadius: 2 }} />
        </Box>

        <Grid container spacing={3}>
          {data.skillCategories.map((cat) => {
            const colors = categoryColors[cat.category] || categoryColors["Architecture & Methodology"];
            const icon = categoryIcons[cat.category];

            return (
              <Grid item xs={12} md={4} key={cat.category}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    height: "100%",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(13,33,55,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" mb={2.5}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        bgcolor: colors.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.color,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {icon}
                    </Box>
                    <Typography variant="h5" color="primary.main">
                      {cat.category}
                    </Typography>
                  </Stack>

                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {cat.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: colors.bg,
                          color: colors.color,
                          border: `1px solid ${colors.border}`,
                          fontWeight: 500,
                          fontSize: "0.8rem",
                          "&:hover": {
                            bgcolor: colors.bg,
                            filter: "brightness(0.94)",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
