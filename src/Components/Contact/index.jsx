import React, { useEffect } from "react";
import "./style.css";
import { Grid, Typography, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import Footer from "../Footer";
import NavBar from "../Navbar";
import img2 from "../../assets/mm.jpg";
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
            We're here to serve you at MM Hotel. Whether you have questions,
            special requests, or need assistance with anything related to your
            stay, our dedicated team is just a call or email away. Reach out to
            us today and let us ensure your experience with us exceeds your
            expectations. Your satisfaction is our top priority, and we look
            forward to assisting you soon!
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
              <RoomIcon color="primary" /> Sabiyan Kebele 02, DireDawa, Ethiopia
            </Typography>
            <Typography>
              <PhoneIcon color="primary" /> +251 984 11 50 50
            </Typography>
            <Typography>
              <PhoneIcon color="primary" /> +251 254 11 44 44
            </Typography>
            <Typography>
              <EmailIcon color="primary" /> mmhoteldiredawa@gmail.com
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.9126859459475!2d41.83915507502611!3d9.602786690483283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101f83c817839%3A0x3e452620dfe8cb5d!2sMM%20Hotel!5e0!3m2!1sen!2set!4v1694253331182!5m2!1sen!2set"
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
