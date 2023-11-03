import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Box,
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
    "24-hour room service",
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
    "In-room Air condition",
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
              }}
            />
            <div style={{ textAlign: "center" }}>
              <IconButton onClick={handlePreviousImage}>
                <NavigateBeforeIcon color="primary" />
              </IconButton>
              {roomData.images.map((thumbnail, index) => (
                <IconButton key={index} onClick={() => handleThumbnailClick(index)}>
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    loading="lazy"
                    style={{
                      width: "60px",
                      height: "auto",
                      border: currentImageIndex === index ? "2px solid #FFEE49" : "none",
                      cursor: "pointer",
                    }}
                  />
                </IconButton>
              ))}
              <IconButton onClick={handleNextImage}>
                <NavigateNextIcon color="primary" />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary" align="center">
              {roomData.title}
            </Typography>
            <Typography>{roomData.description}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default RoomPage;
