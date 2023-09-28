import React, { useEffect, useState, useRef } from "react";
import { Dialog, IconButton, Typography } from "@mui/material";
import "./style.css";
import { gsap } from "gsap";
import img1 from "../../assets/pics/main.jpg";
import img2 from "../../assets/pics/main.jpg";
import img3 from "../../assets/pics/main.jpg";
import hotelmain from "../../assets/pics/about2.jpg";
import { Grid } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaMapMarkerAlt } from "react-icons/fa";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline({});
    tl.current.fromTo(
      ".about-img",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        ease: "elastic",
        duration: 3,
      }
    );

    tl.current.fromTo(
      ".logo",
      {
        opacity: 0,
        x: "-100vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
    tl.current.fromTo(
      ".about-content-text",
      {
        opacity: 0,
        x: "200vh",
      },
      {
        opacity: 1,
        x: 0,
        duration: 3,
      },
      0
    );
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
            color="#FFEE49"
          >
            About US
          </Typography>
        </Grid>
      </Grid>
      <div className="images">
        <div className="main-title">
          <h1>Welcome</h1>
          <h1>To</h1>
          <h1>Our Hotel</h1>
        </div>
        <div className="container">
          <input type="radio" name="slider" id="item-1" defaultChecked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
          <div className="cards">
            <label className="card" htmlFor="item-1" id="song-1">
              <img src={img2} alt="song" className="about-img" loading="lazy" />
            </label>
            <label className="card" htmlFor="item-2" id="song-2">
              <img src={img1} alt="song" className="about-img" loading="lazy" />
            </label>
            <label className="card" htmlFor="item-3" id="song-3">
              <img src={img3} alt="song" className="about-img" loading="lazy" />
            </label>
          </div>
        </div>
      </div>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="logo"
        >
          <img
            src={hotelmain}
            alt="logp"
            style={{ width: "75%", height: "80%" }}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 5,
            }}
            className="about-content-text"
          >
            <Typography
              variant="h3"
              align="center"
              className="about-text-title"
              color="primary"
            >
              White House Addis Hotel
            </Typography>
            <Typography variant="body1" align="center">
              Welcome to White House Addis Hotel, where luxury, hospitality, and
              Ethiopian heritage blend seamlessly. Located in the heart of Addis
              Ababa, our hotel offers personalized service, elegant
              accommodations, and a perfect balance of modern comforts and
              traditional aesthetics. Immerse yourself in the vibrant energy of
              the city, with convenient access to business districts, cultural
              landmarks, and lively nightlife. Whether for business or leisure,
              our dedicated concierge team is ready to ensure a seamless and
              enriching stay. Experience the essence of Ethiopian hospitality at
              White House Addis Hotel, where every moment is crafted to exceed
              your expectations.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} justifyContent="center" p={4}>
        <Typography
          align="center"
          variant="h5"
          sx={{ fontWeight: "bold", textDecoration: "blink" }}
        >
          Welcome to White House Addis Hotel
        </Typography>
        <br />
        <br />
        <Typography variant="body1" align="center">
          Welcome to White House Addis Hotel, where luxury, hospitality, and
          Ethiopian heritage blend seamlessly. Located in the heart of Addis
          Ababa, our hotel offers personalized service, elegant accommodations,
          and a perfect balance of modern comforts and traditional aesthetics.
          Immerse yourself in the vibrant energy of the city, with convenient
          access to business districts, cultural landmarks, and lively
          nightlife. Whether for business or leisure, our dedicated concierge
          team is ready to ensure a seamless and enriching stay. Experience the
          essence of Ethiopian hospitality at White House Addis Hotel, where
          every moment is crafted to exceed your expectations.
        </Typography>
      </Grid> */}
      <Footer />
    </div>
  );
}

export default index;
