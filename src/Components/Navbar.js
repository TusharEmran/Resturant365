import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink } from "react-router-dom";
import "../styles/Headerstyle.css";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handledrawer = () => {
    setMobile(!mobile);
  };
  const drawer = (
    <Box onClick={handledrawer} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1,my:2 }}
      >
        <MenuBookIcon /> Resturant 365
      </Typography>
      <Divider/>
      <ul className="mobilenavigation-manu">
        <li>
          <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/manu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
            onClick={handledrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <MenuBookIcon /> Resturant 365
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" },p:2 }}>
            <ul className="navigation-manu">
              <li>
                <NavLink activeClassName="active" to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/manu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobile}
        onClose={handledrawer}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "220px",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box >
      <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
