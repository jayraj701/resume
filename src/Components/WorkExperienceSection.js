import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  Skeleton,
  Button,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkIcon from "@mui/icons-material/Work";

const SkeletonEntry = () => (
  <TimelineItem>
    <TimelineOppositeContent
      sx={{ display: { xs: "none", md: "block" }, flex: 0.3, pt: 2.5 }}
    >
      <Typography variant="caption" color="text.disabled" fontWeight={500}>
        2025 – Present
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot
        variant="outlined"
        sx={{
          borderStyle: "dashed",
          borderColor: "divider",
          borderWidth: 2,
        }}
      />
    </TimelineSeparator>
    <TimelineContent sx={{ pb: 4 }}>
      <Card
        sx={{
          border: "2px dashed",
          borderColor: "divider",
          bgcolor: "grey.50",
          boxShadow: "none",
          "&:hover": { transform: "none", boxShadow: "none" },
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Skeleton variant="circular" width={48} height={48} />
            <Box flex={1}>
              <Skeleton variant="text" sx={{ width: "55%", fontSize: "1.2rem" }} />
              <Skeleton variant="text" sx={{ width: "38%", fontSize: "0.9rem" }} />
            </Box>
          </Stack>
          <Skeleton variant="rectangular" height={48} sx={{ borderRadius: 2, mb: 1.5 }} />
          <Stack direction="row" spacing={1}>
            <Skeleton variant="rounded" width={80} height={24} />
            <Skeleton variant="rounded" width={60} height={24} />
            <Skeleton variant="rounded" width={70} height={24} />
          </Stack>
          <Typography
            variant="caption"
            color="text.disabled"
            sx={{ display: "block", mt: 2, fontStyle: "italic" }}
          >
            New experience — details coming soon
          </Typography>
        </CardContent>
      </Card>
    </TimelineContent>
  </TimelineItem>
);

const WorkCard = ({ work, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const techChips = work.tech
    ? work.tech.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const paragraphs = work.description
    ? work.description.split("\n\n").filter(Boolean)
    : [];

  const dotColors = ["secondary", "primary", "secondary", "primary"];

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ display: { xs: "none", md: "block" }, flex: 0.3, pt: 2.5 }}
        >
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {work.years}
          </Typography>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color={dotColors[index % 4]} sx={{ boxShadow: "0 0 0 4px rgba(0,201,167,0.15)" }} />
          {index < 3 && <TimelineConnector sx={{ bgcolor: "divider", minHeight: 30 }} />}
        </TimelineSeparator>

        <TimelineContent sx={{ pb: 4 }}>
          <Card>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              {/* Header row */}
              <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
                {work.logo ? (
                  <Avatar
                    src={work.logo}
                    alt={work.company}
                    variant="rounded"
                    sx={{ width: 48, height: 48, flexShrink: 0, bgcolor: "grey.100" }}
                    imgProps={{ style: { objectFit: "contain", padding: 4 } }}
                  />
                ) : (
                  <Avatar variant="rounded" sx={{ width: 48, height: 48, bgcolor: "primary.main", flexShrink: 0 }}>
                    <WorkIcon fontSize="small" />
                  </Avatar>
                )}
                <Box flex={1} minWidth={0}>
                  <Typography variant="h4" sx={{ color: "primary.main", lineHeight: 1.2 }}>
                    {work.company}
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.5, sm: 1.5 }} alignItems={{ xs: "flex-start", sm: "center" }} mt={0.5}>
                    <Typography variant="body1" fontWeight={600} color="text.primary">
                      {work.title}
                    </Typography>
                    <Chip
                      label={work.years}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.72rem",
                        height: 22,
                        borderColor: "secondary.main",
                        color: "secondary.dark",
                        fontWeight: 600,
                        display: { xs: "flex", sm: "none", md: "flex" },
                      }}
                    />
                  </Stack>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => setDialogOpen(true)}
                  sx={{ color: "text.secondary", flexShrink: 0 }}
                  aria-label="View full details"
                >
                  <OpenInFullIcon fontSize="small" />
                </IconButton>
              </Stack>

              {/* Key achievements */}
              {work.keyAchievements && (
                <Box mb={2}>
                  {work.keyAchievements.slice(0, 3).map((ach, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="flex-start" mb={0.75}>
                      <CheckCircleOutlineIcon sx={{ color: "secondary.main", fontSize: "1rem", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2" color="text.secondary">
                        {ach}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              )}

              {/* Tech chips */}
              {techChips.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={0.75} mb={2}>
                  {techChips.slice(0, 8).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "rgba(13,33,55,0.06)",
                        color: "primary.main",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                  {techChips.length > 8 && (
                    <Chip
                      label={`+${techChips.length - 8} more`}
                      size="small"
                      sx={{ bgcolor: "rgba(0,201,167,0.1)", color: "secondary.dark", fontSize: "0.75rem" }}
                    />
                  )}
                </Stack>
              )}

              {/* Expandable description */}
              {paragraphs.length > 0 && (
                <>
                  <Collapse in={expanded} collapsedSize={0}>
                    <Box>
                      {paragraphs.map((para, i) => (
                        <Typography key={i} variant="body2" color="text.secondary" mb={1.5} sx={{ whiteSpace: "pre-line" }}>
                          {para}
                        </Typography>
                      ))}
                    </Box>
                  </Collapse>
                  <Button
                    size="small"
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      p: 0,
                      minWidth: 0,
                      "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                    }}
                  >
                    {expanded ? "Show less" : "Read more"}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>

      {/* Full detail dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 2, pr: 6, bgcolor: "primary.main", color: "white" }}>
          {work.logo && (
            <Avatar
              src={work.logo}
              alt={work.company}
              variant="rounded"
              sx={{ width: 40, height: 40, bgcolor: "white" }}
              imgProps={{ style: { objectFit: "contain", padding: 3 } }}
            />
          )}
          <Box>
            <Typography variant="h5" sx={{ color: "white", fontWeight: 700 }}>
              {work.company}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              {work.title} · {work.years}
            </Typography>
          </Box>
          <IconButton
            onClick={() => setDialogOpen(false)}
            sx={{ position: "absolute", right: 12, top: 12, color: "rgba(255,255,255,0.7)" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 3 }}>
          {techChips.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={0.75} mb={3}>
              {techChips.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{ bgcolor: "rgba(13,33,55,0.08)", color: "primary.main", fontWeight: 500 }}
                />
              ))}
            </Stack>
          )}
          {work.keyAchievements && (
            <Box mb={3}>
              <Typography variant="overline" color="secondary.main" sx={{ mb: 1, display: "block" }}>
                Key Achievements
              </Typography>
              {work.keyAchievements.map((ach, i) => (
                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start" mb={1}>
                  <CheckCircleOutlineIcon sx={{ color: "secondary.main", mt: "2px", flexShrink: 0 }} />
                  <Typography variant="body1" color="text.primary" fontWeight={500}>
                    {ach}
                  </Typography>
                </Stack>
              ))}
            </Box>
          )}
          {paragraphs.map((para, i) => (
            <Typography key={i} variant="body1" color="text.secondary" mb={2} sx={{ whiteSpace: "pre-line", lineHeight: 1.85 }}>
              {para}
            </Typography>
          ))}
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={() => setDialogOpen(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const WorkExperienceSection = ({ data }) => {
  if (!data || !data.work) return null;

  const workSorted = [...data.work].sort((a, b) => {
    if (a.isSkeleton) return -1;
    if (b.isSkeleton) return 1;
    const getYear = (w) => {
      const match = w.years.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getYear(b) - getYear(a);
  });

  const realWork = workSorted.filter((w) => !w.isSkeleton);
  const hasSkeleton = workSorted.some((w) => w.isSkeleton);

  return (
    <Box component="section" id="resume" sx={{ py: { xs: 7, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography variant="overline" color="secondary.main" sx={{ display: "block", mb: 1 }}>
            Career Journey
          </Typography>
          <Typography variant="h2" color="primary.main">
            Work Experience
          </Typography>
          <Box sx={{ width: 50, height: 3, bgcolor: "secondary.main", mx: "auto", mt: 2, borderRadius: 2 }} />
        </Box>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.3,
            },
            p: 0,
          }}
        >
          {hasSkeleton && <SkeletonEntry />}
          {realWork.map((work, idx) => (
            <WorkCard key={work.company + idx} work={work} index={idx} />
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default WorkExperienceSection;
