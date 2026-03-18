import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";

const iconMap = {
  PaymentsIcon: <PaymentsIcon sx={{ fontSize: "2rem" }} />,
  PeopleIcon: <PeopleIcon sx={{ fontSize: "2rem" }} />,
  TrendingUpIcon: <TrendingUpIcon sx={{ fontSize: "2rem" }} />,
  GroupsIcon: <GroupsIcon sx={{ fontSize: "2rem" }} />,
  UKFlag: <img src="https://flagcdn.com/w40/gb.png" alt="UK" width="40" height="27" style={{ borderRadius: 3, display: "block" }} />,
  EarthSymbol: <LanguageIcon sx={{ fontSize: "2rem" }} />,
};

const MetricCard = ({ metric, visible }) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 3, md: 4 },
      borderRadius: 3,
      background: "white",
      borderLeft: "4px solid",
      borderColor: "secondary.main",
      "&:hover": {
        boxShadow: "0 16px 48px rgba(13,33,55,0.12)",
      },
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
    }}
  >
    <Box sx={{ color: "secondary.main", mb: 1 }}>
      {iconMap[metric.icon] || <TrendingUpIcon sx={{ fontSize: "2rem" }} />}
    </Box>
    <Typography
      variant="h2"
      sx={{
        color: "primary.main",
        fontWeight: 800,
        fontSize: { xs: "2rem", md: "2.6rem" },
        lineHeight: 1.1,
        mb: 0.5,
      }}
    >
      {metric.value}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        fontWeight: 500,
        fontSize: "0.88rem",
        lineHeight: 1.4,
      }}
    >
      {metric.label}
    </Typography>
  </Paper>
);

const ImpactMetrics = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [data]);

  if (!data || !data.impactMetrics) return null;

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "primary.main",
        py: { xs: 4, md: 5 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #00C9A7 0%, #0078D4 50%, #00C9A7 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", display: "block", mb: 1 }}
          >
            Measurable Impact
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}
          >
            Delivering Results at Scale
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {data.impactMetrics.map((metric, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <MetricCard metric={metric} visible={visible} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactMetrics;
