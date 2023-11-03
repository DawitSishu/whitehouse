import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  Input,
  Button,
  TextField,
  FormControl,
  Paper,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IoDiamondSharp } from "react-icons/io5";
import img from "../../assets/white.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";

const roomData = {
  image: img,
  description:
    "Experience royal luxury in the luxurious suite. Enjoy 24-hour room service and catch up on work at the study desk with multi-channel television system at your fingertips. Individual controlled air conditioning ensures your perfect temperature, and access to high-speed WiFi internet keeps you connected.",
  images: [img, img, img, img],
  title: "Deluxe king Room",
  features: [
    "24 hour room service",
    "Breakfast Services",
    "Study Desk",
    "Multi channel television system",
    "Acces to high speed WiFi internet",
    "luxurious Shower with Seam and bath-hub",
    "Living Room with Comfortable Sofas",
  ],
};

const King = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % roomData.images.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? roomData.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: 3, margin: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={roomData.images[currentImageIndex]}
              alt="Main"
              loading="lazy"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "400px",
              }}
            />
            <Grid container sx={{ mt: 2 }}>
              <Grid item>
                <IconButton onClick={handlePreviousImage}>
                  <NavigateBeforeIcon color="primary" />
                </IconButton>
              </Grid>
              {roomData.images.map((thumbnail, index) => (
                <Grid item key={index}>
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    loading="lazy"
                    onClick={() => handleThumbnailClick(index)}
                    style={{
                      width: "60px",
                      height: "auto",
                      border:
                        currentImageIndex === index
                          ? "2px solid #FFEE49"
                          : "none",
                      cursor: "pointer",
                    }}
                  />
                </Grid>
              ))}
              <Grid item>
                <IconButton onClick={handleNextImage}>
                  <NavigateNextIcon color="primary" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary" align="center">
              {roomData.title}
            </Typography>
            <Typography>{roomData.description}</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5" color="primary">
                Book Now
              </Typography>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  label="Check-in Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  label="Check-out Date"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                startIcon={<NavigateNextIcon />}
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => {
                  window.location.href =
                    "https://www.expedia.com/Addis-Ababa-Hotels-White-House-Addis-Hotel.h11691311.Hotel-Information?chkin=2023-11-05&chkout=2023-11-09&x_pwa=1&rfrr=HSR&pwa_ts=1699021543166&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS.com&useRewards=false&rm1=a2&regionId=6271020&destination=Addis+Ababa%2C+Ethiopia&destType=MARKET&neighborhoodId=553248633981729799&selected=11691311&latLong=8.980598%2C38.757758&sort=RECOMMENDED&top_dp=42&top_cur=USD&userIntent=&selectedRoomType=323724352&selectedRatePlan=392623535&searchId=49ae2472-1cd7-4360-8dad-f3bae3112274";
                }}
              >
                Book Online
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" color="primary">
            Room Features
          </Typography>
          <List sx={{ columns: { xs: 1, sm: 2 } }}>
            {roomData.features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <IoDiamondSharp color="#FFEE49" />
                </ListItemIcon>
                {feature}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default King;
