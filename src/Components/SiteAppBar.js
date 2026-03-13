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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", section: "home", path: "/" },
  { label: "About", section: "about", path: "/" },
  { label: "Experience", section: "resume", path: "/" },
  { label: "Contact", section: "contact", path: "/" },
  { label: "References", section: null, path: "/references" },
  { label: "Thought Leadership", section: null, path: "/blogs" },
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
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={item.section ? "button" : Link}
                  to={item.section ? undefined : item.path}
                  onClick={() => handleNavClick(item)}
                  sx={{
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
                  }}
                >
                  {item.label}
                </Button>
              ))}
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
