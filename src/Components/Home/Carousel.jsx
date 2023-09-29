import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/white.jpg";
import img2 from "../../assets/white.jpg";
import { Paper, Button, Typography } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "White House Addis Hotel",
      description: "",
      imgUrl: img1,
    },
    {
      name: "White House Addis Hotel",
      description: "",
      imgUrl: img2,
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      duration={300}
      navButtonsAlwaysVisible={true}
      indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "80vh",
        backgroundImage: `url(${props.item.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          {props.item.name}
        </Typography>
      </div>
    </Paper>
  );
}
