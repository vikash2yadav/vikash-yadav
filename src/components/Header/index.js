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

src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"          alt=""
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
              src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"
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


