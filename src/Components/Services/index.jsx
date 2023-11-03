import React, { useEffect, useState, useRef } from "react";
import { ServiceData } from "./ServiceData";
import {
  Grid,
  Typography,
  Card,
  Box,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar";
import mainImg from "../../assets/white.jpg";
import Footer from "../Footer";

const ServiceGrid = ({ serv, servidx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { imgUrl, title, text } = serv;
  const isImageLeft = servidx % 2 === 0;

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      direction={isImageLeft ? "row" : "row-reverse"}
      p={2}
      mb={3}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            objectFit: "cover",
            maxHeight: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid ml={3}>
          <Typography variant="h3" align="center" color="primary">
            {title}
          </Typography>
          <Typography variant="p">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const index = () => {
  const [idx, setIdx] = useState(0);
  const scrollToRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLoadMore = (i) => {
    setIdx(i);
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Navbar />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          minHeight: "50vh",
          backgroundImage: `url(${mainImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(0.5px)",
          }}
        ></div>
        <Grid item justifyContent="center" zIndex={1}>
          <Typography variant="h3" align="center" color="#fff">
            Enhance Your Stay with Exceptional Services at Our Stunning Hotel
          </Typography>
        </Grid>
      </Grid>
      {ServiceData.map((service, index) => (
        <ServiceGrid serv={service} servidx={index} key={index} />
      ))}
      <Footer />
    </div>
  );
};

export default index;
