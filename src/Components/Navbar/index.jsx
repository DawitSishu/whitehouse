import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function CustomAppBar() {
  const isSmallScreen = useMediaQuery("(max-width:782px)");
  const ismobile = useMediaQuery("(max-width:375px)");
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Link to="/">
            <IconButton size="large" edge="start">
              <img src={logo} style={{ maxWidth: "70px" }} />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: ismobile ? "none" : "block",
            }}
          >
            White House Addis Hotel
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: isSmallScreen ? "none" : "block",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Button sx={{ color: "white" }}>Home</Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white" }}>About</Button>
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white" }}>Services</Button>
            </Link>
            <Link
              to="/gallery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white" }}>Gallery</Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button sx={{ color: "white" }}>Contact</Button>
            </Link>
          </Stack>
          <IconButton
            size="large"
            edge={isSmallScreen ? "end" : false}
            sx={{
              display: isSmallScreen ? "block" : "none",
              marginLeft: isSmallScreen ? "auto" : 0,
              color: "white",
            }}
            onClick={showSidebar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav style={{ width: "100vw" }}>
        <Drawer
          variant="temporary"
          anchor="right"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              width: "250px",
              backgroundColor: "#394757",
            },
          }}
          open={sidebar}
          onClose={showSidebar}
        >
          <List>
            <ListItem>
              <IconButton onClick={showSidebar}>
                <AiIcons.AiOutlineClose color="#FFF" />
              </IconButton>
              <Typography align="center" color="#FFF" ml={3}>
                White House Addis
              </Typography>
            </ListItem>
            <Divider />
            {SidebarData.map((item, index) => (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <ListItem
                  key={index}
                  onClick={showSidebar}
                  sx={{ "&:hover": { backgroundColor: "#bf3af0" } }}
                >
                  <ListItemButton alignItems="center">
                    {item.icon}
                    <ListItemText
                      primary={item.title}
                      sx={{
                        textAlign: "center",
                        fontSize: "26px !important",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </nav>
    </div>
  );
}

export default CustomAppBar;
