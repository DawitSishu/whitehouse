import React, { useState, useEffect } from "react";
import RoomPage from "./Room";
import { AllRooms } from "./RoomData";
import { Grid, Button, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar";
import mainImg from "../../assets/pics/p6.jpg";
import Footer from "../Footer";
import {
  AccessTime,
  FlightTakeoff,
  Hotel,
  LocalShipping,
  RoomService,
} from "@mui/icons-material";

const RoomGrid = ({ room, roomIndex, open }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { image, title, description, features } = room;
  const isImageLeft = roomIndex % 2 === 0;

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
          src={image}
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
          <Typography variant="h3" align="center">
            {title}
          </Typography>
          <Typography variant="p">{description}</Typography>
          <br />
          <Button
            variant="contained"
            sx={{ marginTop: 4 }}
            onClick={() => open(room)}
          >
            Load Amenities
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
const index = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpen = (roomdt) => {
    setdata(roomdt);
  };

  const imgAction = () => {
    setdata(null);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {!data ? (
        <>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "relative",
              minHeight: "40vh",
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
              <Typography variant="h4" align="center" color="#0e1114">
                Experience the perfect retreat for your getaway, where
                impeccable service await in our exquisite rooms.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ pl: 5, pr: 5 }}>
            <Grid xs={12} sm={6}>
              <Typography variant="h6">
                <AccessTime /> Check-in:
              </Typography>
              <Typography>
                <FlightTakeoff /> Guaranteed check-in from 1:00 p.m.
              </Typography>
              <Typography>
                <FlightTakeoff /> If the room is ready earlier, early check-in
                is allowed.
              </Typography>
              <Typography>
                <LocalShipping /> If the room is not ready, complimentary
                luggage storage is available.
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography variant="h6">
                <AccessTime /> Check-out:
              </Typography>
              <Typography>
                <Hotel /> Check-out by 11:30 a.m. at the latest.
              </Typography>
              <Typography>
                <RoomService /> Request for late check-out at the reception.
              </Typography>
              <Typography>
                <LocalShipping /> Luggage storage is available after check-out.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />

          {AllRooms.map((room, index) => (
            <RoomGrid
              key={index}
              room={room}
              roomIndex={index}
              open={handleOpen}
            />
          ))}
        </>
      ) : (
        <Grid
          sx={{
            width: "100vw",
            height: "100vh",
            background: "transparent",
            backdropFilter: "blur(25px)",
            overflowX: "hidden",
          }}
        >
          <IconButton
            onClick={() => imgAction()}
            sx={{
              position: "absolute",
              right: "7%",
              top: "7%",
              backgroundColor: "#394757",
            }}
          >
            <CloseIcon sx={{ color: "#FFEE49", fontSize: "2.5rem" }} />
          </IconButton>
          <RoomPage roomData={data} />
        </Grid>
      )}
      <Footer />
    </div>
  );
};

export default index;
