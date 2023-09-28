import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/mm.jpg";
import img2 from "../../assets/pics/x.jpg";
import { Paper, Button, Typography } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      imgUrl: img1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      imgUrl: img2,
    },
  ];

  return (
    <Carousel autoPlay={true} duration={300} navButtonsAlwaysVisible={true}>
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
        <Typography variant="h3" color="primary" fontWeight="bold">
          {props.item.name}
        </Typography>
        <Typography color="primary" fontWeight="bold" variant="h5">
          {props.item.description}
        </Typography>
      </div>
    </Paper>
  );
}
