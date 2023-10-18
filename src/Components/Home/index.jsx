import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  Grid,
  Typography,
  Divider,
  Box,
  Button,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
import { BiRestaurant } from "react-icons/bi";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MdRoomService, MdLocalLaundryService } from "react-icons/md";
import {
  FaDumbbell,
  FaGlassMartini,
  FaWifi,
  FaClock,
  FaSpa,
} from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "../../assets/white2.jpg";
import Carou from "./Carousel";

const facilities = [
  { name: "Restaurant", icon: <BiRestaurant size={33} color="#FFEE49" /> },
  { name: "Room Service", icon: <MdRoomService size={33} color="#FFEE49" /> },
  {
    name: "Laundary",
    icon: <MdLocalLaundryService size={33} color="#FFEE49" />,
  },
  { name: "Bar", icon: <FaGlassMartini size={33} color="#FFEE49" /> },
  { name: "Gym", icon: <FaDumbbell size={33} color="#FFEE49" /> },
  { name: "Spa", icon: <FaSpa size={33} color="#FFEE49" /> },
  { name: "Wifi", icon: <FaWifi size={33} color="#FFEE49" /> },
  { name: "24/7 Front Desk", icon: <FaClock size={33} color="#FFEE49" /> },
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
            backgroundColor: "#FFEE49",
          }}
        />
      </Grid>
      <Grid container spacing={2} pl={2} pr={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={img1} alt="Background" className="background-image" />
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
            <img src={img1} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Our Services</Typography>
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
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={img1} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Contact Us</Typography>
              <br />
              <Link to="/contact">
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
      </Grid>
      <Box>
        <Grid container justifyContent="center" spacing={2} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="primary">
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
                Our hotel delivers specialized and unique experiences, as well
                as personalised concierge services, to fulfill your every need.
                Our staff is committed to ensuring your complete satisfaction,
                allowing you to relax and enjoy every moment of your visit.
                Explore our one-of-a-kind packages for a spectacular luxury
                holiday experience right now.
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
            <Button variant="contained">Explore More</Button>
          </Link>
        </Grid>
      </Box>
      <Grid container spacing={2} pl={2} pr={2} mb={4} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="primary">
            Image Gallery
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={img1} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={img1} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={img1} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid container justifyContent="center" mt={1}>
          <Link to="/gallery">
            <Button variant="contained">Ecplore More</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "20px", margin: 1 }}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            Where You Can Find Us
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          zIndex={1}
          justifyContent="center"
          sx={{ height: "60vh", paddingRight: 2 }}
        >
          <Box sx={{ width: "100%", height: "100%" }} className="home-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7738841989017!2d38.79160637379982!3d8.99294269106697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84e3cf649285%3A0x84bd06c4e5105ff9!2zV2hpdGUgSG91c2UgQWRkaXMgSG90ZWwgfCBCb2xlIHwg4YuL4Yut4Ym1IOGIg-GLjeGItSDhiqDhi7LhiLUgfCDhiabhiIwgfA!5e0!3m2!1sen!2set!4v1695880148030!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ paddingLeft: 2 }}>
          <ListItem>
            <ListItemIcon>
              <WifiIcon color="primary" />
            </ListItemIcon>
            <Typography>Free Wi-Fi Internet in Rooms</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RoomServiceIcon color="primary" />
            </ListItemIcon>
            <Typography>
              In Room Dining (Room Service) Available At Anytime
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalParkingIcon color="primary" />
            </ListItemIcon>
            <Typography>Local Self Parking: For Free</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon color="primary" />
            </ListItemIcon>
            <Typography>Bole sub city, woreda 03</Typography>
          </ListItem>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default index;
