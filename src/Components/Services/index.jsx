import React, { useEffect, useState, useRef } from "react";
import { ServiceData, roomData } from "./ServiceData";
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
import RoomPage from "./Room";

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
  const [showRoomPage, setShowRoomPage] = useState(false);
  const [idx, setIdx] = useState(0);
  const scrollToRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLoadMore = (i) => {
    setShowRoomPage(true);
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
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" align="center" color="primary">
            Comfortable Rooms
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
              Our rooms are designed for your comfort and relaxation. We provide
              comfortable bedding and a peaceful ambiance to help you unwind and
              get a good night's sleep. You'll also have access to modern
              amenities, such as high-speed internet, and complimentary
              beverages. Whether you're traveling alone or with family and
              friends, we have a range of room types to choose from, including
              suites and connecting rooms.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={4}>
        {roomData.map((card, index) => (
          <Grid item key={index} ml={2} mr={2}>
            <Card
              sx={{
                maxWidth: 450,
                height: 550,
                marginBottom: 5,
                boxShadow: "0 2px 10px 0 rgba(255, 215, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "100%", height: "50%" }}
                  loading="lazy"
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleLoadMore(index)}
                >
                  Show More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid ref={scrollToRef}>
        {showRoomPage ? <RoomPage roomData={roomData[idx]} /> : null}
      </Grid>
      {ServiceData.map((service, index) => (
        <ServiceGrid serv={service} servidx={index} key={index} />
      ))}
      <Footer />
    </div>
  );
};

export default index;
