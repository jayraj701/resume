import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", section: "home", path: "/" },
  { label: "About", section: "about", path: "/" },
  { label: "Experience", section: "resume", path: "/" },
  { label: "Contact", section: "contact", path: "/" },
  { label: "References", section: null, path: "/references" },
  { label: "Thought Leadership", section: null, path: "/blogs" },
];

const caseStudies = [
  { label: "Birmingham Bank", path: "/case-studies/birmingham-bank" },
  { label: "Astro Terra", path: "/case-studies/astro-terra" },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const SiteAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [caseStudiesAnchor, setCaseStudiesAnchor] = useState(null);
  const [mobileCaseStudiesOpen, setMobileCaseStudiesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (item) => {
    setDrawerOpen(false);
    if (item.section) {
      if (location.pathname !== "/") {
        navigate(`/#${item.section}`);
      } else {
        const el = document.getElementById(item.section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navButtonSx = {
    color: "rgba(255,255,255,0.85)",
    fontWeight: 500,
    fontSize: "0.88rem",
    letterSpacing: "0.3px",
    textTransform: "none",
    px: 1.5,
    py: 0.75,
    borderRadius: 2,
    "&:hover": {
      color: "white",
      bgcolor: "rgba(255,255,255,0.1)",
    },
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        pt: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2 }}>
        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={item.section ? "div" : Link}
              to={item.section ? undefined : item.path}
              onClick={() => handleNavClick(item)}
              sx={{
                px: 3,
                py: 1.5,
                "&:hover": { bgcolor: "primary.light" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Case Studies expandable section */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMobileCaseStudiesOpen((prev) => !prev)}
            sx={{ px: 3, py: 1.5, "&:hover": { bgcolor: "primary.light" } }}
          >
            <ListItemText
              primary="Case Studies"
              primaryTypographyProps={{
                sx: { color: "white", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.5px" },
              }}
            />
            {mobileCaseStudiesOpen
              ? <ExpandLessIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem" }} />
              : <ExpandMoreIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem" }} />
            }
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileCaseStudiesOpen} timeout="auto">
          <List disablePadding>
            {caseStudies.map((cs) => (
              <ListItem key={cs.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={cs.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ pl: 5, py: 1.25, "&:hover": { bgcolor: "primary.light" } }}
                >
                  <ListItemText
                    primary={cs.label}
                    primaryTypographyProps={{
                      sx: { color: "rgba(255,255,255,0.8)", fontWeight: 500, fontSize: "0.95rem" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" elevation={0}>
          <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 4 } }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              sx={{
                flexGrow: 1,
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: { xs: "1rem", md: "1.15rem" },
                letterSpacing: "0.5px",
              }}
            >
              Jayraj Nimbalkar
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={item.section ? "button" : Link}
                  to={item.section ? undefined : item.path}
                  onClick={() => handleNavClick(item)}
                  sx={navButtonSx}
                >
                  {item.label}
                </Button>
              ))}

              {/* Case Studies dropdown */}
              <Button
                onClick={(e) => setCaseStudiesAnchor(e.currentTarget)}
                endIcon={<ExpandMoreIcon sx={{ fontSize: "1rem !important", transition: "transform 0.2s", transform: caseStudiesAnchor ? "rotate(180deg)" : "rotate(0deg)" }} />}
                sx={navButtonSx}
              >
                Case Studies
              </Button>
              <Menu
                anchorEl={caseStudiesAnchor}
                open={Boolean(caseStudiesAnchor)}
                onClose={() => setCaseStudiesAnchor(null)}
                PaperProps={{
                  sx: {
                    mt: 0.5,
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    minWidth: 200,
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                {caseStudies.map((cs) => (
                  <MenuItem
                    key={cs.label}
                    component={Link}
                    to={cs.path}
                    onClick={() => setCaseStudiesAnchor(null)}
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      py: 1.25,
                      px: 2.5,
                      color: "primary.main",
                      "&:hover": { bgcolor: "rgba(13,33,55,0.05)" },
                    }}
                  >
                    {cs.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "primary.main" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default SiteAppBar;
