import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Input,
  Button,
  TextField,
  FormControl,
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
    "Experience unparalleled comfort and style in our VIP Suite. This meticulously designed room offers a harmonious blend of elegance and functionality, ensuring an unforgettable stay. Relax in the inviting seating area or indulge in a restful night's sleep in the luxurious bedroom. Enjoy modern amenities, a well-equipped work desk, and high-speed internet access. Our dedicated concierge and private dining options cater to your every need. Discover the epitome of luxury and convenience in our VIP Suite.",
  images: [img, img, img, img, img],
  title: "Vip Suite",
  features: [
    "24 hour room service",
    "Comfortable beds and pillows",
    "Fast Wi-Fi Connection",
    "In-room safe box",
    "Balcony",
    "Daily housekeeping",
    "Iron & Extra bed",
    "Telephone",
    "Refrigerator",
    "Cable television",
    "Jacuzzi",
    "In room Air condition ",
  ],
};

const RoomPage = () => {
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
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0",
                columns: "2",
              }}
            >
              {roomData.features.map((feature, index) => (
                <li key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <IoDiamondSharp />
                    <Typography>{feature}</Typography>
                  </Box>
                </li>
              ))}
            </ul>
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
              >
                Book Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default RoomPage;

//view haile resort