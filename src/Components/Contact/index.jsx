import React, { useEffect } from "react";
import "./style.css";
import { Grid, Typography, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import Footer from "../Footer";
import NavBar from "../Navbar";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <Typography
        variant="h2"
        align="center"
        color="primary"
        sx={{ fontWeight: "bold" }}
        mt={3}
      >
        Contact US
      </Typography>
      <Grid zIndex={1} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography align="left" p={3}>
            At White House Addis Hotel, we're here to help. If you have any
            queries, special requests, or require help with anything relating to
            your stay, our devoted crew is always a phone call or email away.
            Contact us immediately to guarantee that your experience with us
            surpasses your expectations. Your pleasure is our first concern, and
            we hope to help you soon!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
            className="contact-item"
          >
            <Typography>
              <RoomIcon color="primary" /> Bole sub city, woreda 03, Addis
              Ababa, Ethiopia
            </Typography>
            <Typography>
              <PhoneIcon color="primary" /> +251 987 65 43 21
            </Typography>
            <Typography>
              <EmailIcon color="primary" /> yy@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" zIndex={1}>
        <Typography
          variant="h2"
          align="center"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Get In Touch
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} pr={3}>
          <Box sx={{ padding: 3, height: "100%" }}>
            <Box
              sx={{
                height: "100%",
              }}
              className="contact-box"
            >
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};
export default index;
