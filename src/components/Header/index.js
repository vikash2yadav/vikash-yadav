import React from "react";
import { Button, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
{ component: "Home", to: "home" },
{ component: "About", to: "about" },
{ component: "Service", to: "service" },
{ component: "Project", to: "project" },
{ component: "Blog", to: "blog" },
{ component: "Contact", to: "contact" },
];

const Header = (props) => {
const { window } = props;
const [mobileOpen, setMobileOpen] = React.useState(false);
const [section, setSection] = React.useState('home');

const scrollToSection = (sectionId) => {
  setSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleDrawerToggle = () => {
  setMobileOpen((prevState) => !prevState);
};
const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Typography variant="h6" sx={{ my: 2 }}>
      <Link style={{ fontFamily: "cursive" }} to="/">
        <img
          className="w-full h-20"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </Link>{" "}
    </Typography>
    <Divider />
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary={item.component}
              onClick={() => scrollToSection(item.to)}
              key={item}
              style={{ color: "black" }}
            ></ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

const container =
  window !== undefined ? () => window().document.body : undefined;

return (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar component="nav" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link style={{ fontFamily: "cursive" }} to="/">
            <img
              style={{ width: "150px" }}
              className="h-20"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              sx={{
                position: "relative",
                color: item.to === section ? "red" : "black",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                fontStyle: item.to === section ? "italic" : "normal",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  width: item.to === section ? "100%" : "0%",
                  backgroundColor: "red",
                  transition: "width 0.3s ease-in-out",
                },
                "&:hover::after": {
                  width: "100%",
                },
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => scrollToSection(item.to)}
              key={item.component}
            >
              {item.component}
            </Button>

          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
    <Box component="main" sx={{}}>
      <Toolbar />
    </Box>
  </Box>
);
};

export default Header;


