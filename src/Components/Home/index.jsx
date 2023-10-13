import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Grid, Typography, Divider, Box, Button } from "@mui/material";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
import { BiRestaurant } from "react-icons/bi";
import { MdRoomService, MdLocalLaundryService } from "react-icons/md";
import {
  FaDumbbell,
  FaGlassMartini,
  FaHotTub,
  FaWifi,
  FaUsers,
} from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Carou from "./Carousel";

const facilities = [
  { name: "Restaurant", icon: <BiRestaurant size={33} /> },
  { name: "Room Service", icon: <MdRoomService size={33} /> },
  { name: "Laundary", icon: <MdLocalLaundryService size={33} /> },
  { name: "Meeting", icon: <FaUsers size={33} /> },
  { name: "Gym", icon: <FaDumbbell size={33} /> },
  { name: "Massage", icon: <TbMassage size={33} /> },
  { name: "Steam", icon: <FaHotTub size={33} /> },
  { name: "Wifi", icon: <FaWifi size={33} /> },
];

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Carou />
      <Grid pl={10} pr={10} pb={3} mt={2}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          WELCOME TO OUR HOTEL
        </Typography>
        <Typography variant="body2" align="center">
          <FaStar color="#FFEE49" /> Welcome to White Hose Addis Hotel, where
          captivating energy meets unparalleled luxury! Prepare to be immersed
          in a one-of-a-kind and electrifying environment in the heart of Addis
          Abeba. Our energetic crew is ready to meet all of your needs, from
          chic lodgings to varied eating and entertaining entertainment. Embrace
          the city's lively pulse at White Hose Addis Hotel, where every minute
          is thrilling! our doorstep. <FaStar color="#FFEE49" />
        </Typography>
        <Divider
          sx={{
            marginTop: 2,
            width: "30%",
            height: "2px",
            margin: "20px auto",
            // backgroundColor: "#FF00FF",
            backgroundColor: "#FFEE49",
          }}
        />
      </Grid>
      {/* <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          minHeight: "20vh", // Decrease the height to half (50% of viewport height)
          // backgroundImage: `url(${mainImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ textAlign: "center" }} // Add padding to center content
        >
          <img
            src={logo}
            style={{ width: "70%", maxWidth: "200px" }}
            alt="Logo"
          />
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "#FF00FF", fontWeight: "bold" }}
          >
            MM Hotel
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: "white" }}>
            Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
            <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
          </Typography>
        </Grid>
      </Grid> */}
      {/* <Grid pl={10} pr={10} pb={3}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          WELCOME TO OUR HOTEL
        </Typography>
        <Typography variant="body2" align="center">
          <FaStar color="#FF00FF" /> Nestled in the heart of the city's vibrant
          pulse, MM Hotel offers a prime location just moments away from the
          bustling bus station. Immerse yourself in the dynamic energy of Dire
          Dawa as you embark on effortless journeys to iconic landmarks,
          cultural hotspots, and hidden gems, all conveniently accessible from
          our doorstep. <FaStar color="#FF00FF" />
        </Typography>
        <Divider
          sx={{
            marginTop: 2,
            width: "30%",
            height: "2px",
            margin: "20px auto",
            // backgroundColor: "#FF00FF",
            backgroundColor: "#FFF",
          }}
        />
      </Grid> */}
      {/* <Grid container spacing={2} pl={2} pr={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={about} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">About Us</Typography>
              <br />
              <Link to="/about">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={room} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Rooms</Typography>
              <br />
              <Link to="/rooms">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={srv} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Services</Typography>
              <br />
              <Link to="/services">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid> */}
      {/* <Box>
        <Grid container justifyContent="center" spacing={2} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Our Facilities
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                To meet your every need, our hotel provides tailored and unique
                experiences, as well as individual concierge services. Our crew
                is dedicated to assuring your entire happiness, allowing you to
                unwind and enjoy every second of your stay. Explore our unique
                packages for a memorable luxury vacation experience now.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} p={1} justifyContent="center">
          {facilities.map((facility, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Grid container justifyContent="center">
                {facility.icon}
              </Grid>
              <Typography align="center">{facility.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <br />
        <Grid container justifyContent="center">
          <Link to="/services">
            <Button variant="contained">Load More</Button>
          </Link>
        </Grid>
      </Box> */}
      {/* <Grid container spacing={2} pl={2} pr={2} mb={4} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Refined Image Gallery
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g1} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g2} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g3} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid container justifyContent="center" mt={1}>
          <Link to="/gallery">
            <Button variant="contained">Load More</Button>
          </Link>
        </Grid>
      </Grid> */}
      {/* <Box>
        <Grid container justifyContent="center" spacing={2} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Trusted Partnerships
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                Experience the power of long-lasting client relationships. Our
                portfolio showcases a diverse range of esteemed partners, both
                past and present. From successful collaborations to enduring
                connections, we have nurtured fruitful alliances that have
                fueled growth and success. Explore our grid of trusted logos,
                symbolizing the enduring relationships we've built with our
                valued clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 4, 900: 7 }}
        style={{ backgroundColor: "white" }}
      >
        <Masonry gutter="20px">
          {clients.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                }}
                alt=""
                loading="lazy"
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry> */}
      {/* <Grid container spacing={2} pl={2} pr={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" >
            We Invite You to Experience Our World-Class Amenities
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "auto",
            }}
            className="home-map"
            mt={1}
            mb={2}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.9126859459475!2d41.83915507502611!3d9.602786690483283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101f83c817839%3A0x3e452620dfe8cb5d!2sMM%20Hotel!5e0!3m2!1sen!2set!4v1694253331182!5m2!1sen!2set"
              width="100%"
              height="auto"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid> */}
      {/* <Footer /> */}
    </div>
  );
};

export default index;
