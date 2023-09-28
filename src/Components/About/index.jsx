import React, { useEffect, useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Dialog, IconButton, Typography } from "@mui/material";
import {
  Close as CloseIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import "./style.css";

import poster from "../../assets/pics/eb4.jpg";
import vid from "../../assets/promo.mp4";

import mainImg from "../../assets/pics/main.jpg";
import hotelmain from "../../assets/pics/about2.jpg";
import { Grid } from "@mui/material";
import thumbnail from "../../assets/pics/tum.jpg";
import { FaTimes, FaPlay } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaMapMarkerAlt } from "react-icons/fa";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ textAlign: "center" }} // Add padding to center content
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
            color="#FF00FF"
          >
            About US
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" p={4}>
        <Typography
          align="center"
          variant="h5"
          sx={{ fontWeight: "bold", textDecoration: "blink" }}
        >
          Welcome to MM Hotel, your gateway to the vibrant city of Dire Dawa
        </Typography>
        <br />
        <br />
        <Typography variant="body1" align="center">
          At MM Hotel, we offer a range of 60 guest rooms, from luxurious Suites
          to stylish and comfortable deluxe bedrooms, many of which offer
          magnificent views of the Dire Dawa Mountains. Our prime location in
          Sabian, just a short distance from the airport, makes MM Hotel Dire
          Dawa an ideal choice for your stay. During your stay, you can enjoy
          the convenience of our on-site bar and restaurant, where you can savor
          delicious meals. We also provide free private parking on site for your
          convenience. Stay connected with complimentary Wi-Fi available
          throughout the property. Our guest rooms at MM Hotel are designed with
          your comfort in mind, featuring air-conditioning, flat-screen TVs with
          satellite channels, tea-making facilities, and Jacuzzis available in
          our Suites. Each room comes with a private bathroom equipped with a
          bath and shower, along with bathrobes and slippers for your comfort.
          At MM Hotel Dire Dawa, we go the extra mile to enhance your stay with
          a free shuttle service from the airport, a 24-hour front desk, and
          meeting facilities. Additionally, our shared lounge provides a cozy
          space for guests to relax and watch TV. We look forward to hosting you
          and making your stay in Dire Dawa truly memorable.
        </Typography>
      </Grid>
      <Typography variant="h3" align="center">
        Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
        <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
      </Typography>
      <div>
        {!isOpen ? (
          <div className="play-image">
            <img src={poster} alt="Play Video" className="poster-image" />
            <div className="play-button-overlay" onClick={handleOpenPopup}>
              <PlayArrowIcon
                sx={{ fontSize: "100px", color: "#FF00FF" }}
                className="play-button-icon"
              />
            </div>
          </div>
        ) : null}
        <Dialog
          open={isOpen}
          onClose={handleClosePopup}
          fullWidth
          maxWidth="lg"
          sx={{ height: "100vh" }}
        >
          <div className="popup-overlay">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClosePopup}
              className="close-button"
              sx={{ position: "fixed", top: "10px", left: "10px" }}
            >
              <CloseIcon sx={{ fontSize: "40px" }} />
            </IconButton>
            <div className="video-container">
              <Video
                autoPlay
                loop
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              >
                <source src={vid} type="video/mp4" />
              </Video>
            </div>
          </div>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}

export default index;
