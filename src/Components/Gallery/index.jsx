import React, { useState, useEffect } from "react";
import "./style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyLoad from "react-lazyload";
import img from "../../assets/mm.jpg";
import r0 from "../../assets/pics/p1.jpg";
import r1 from "../../assets/pics/sute1.jpg";
import r2 from "../../assets/pics/dx1.jpg";
import r3 from "../../assets/pics/s1.jpg";
import r4 from "../../assets/pics/tw1.jpg";
import r5 from "../../assets/pics/p2.jpg";
import r6 from "../../assets/pics/sute4.jpg";
import r7 from "../../assets/pics/dx4.jpg";
import r8 from "../../assets/pics/p5.jpg";
import r9 from "../../assets/pics/rest.jpg";
import r10 from "../../assets/pics/bar.jpg";
import r11 from "../../assets/pics/eb1.jpg";
import r12 from "../../assets/pics/eb2.jpg";
import r13 from "../../assets/pics/eb3.jpg";
import r14 from "../../assets/pics/eb4.jpg";
import r15 from "../../assets/pics/eb5.jpg";
import r16 from "../../assets/pics/eb6.jpg";
import r17 from "../../assets/pics/eb7.jpg";
import r18 from "../../assets/pics/teras.jpg";
import r19 from "../../assets/pics/st1.jpg";
import r20 from "../../assets/pics/st2.jpg";
import r21 from "../../assets/pics/st3.jpg";
import r22 from "../../assets/pics/st8.jpg";
import r23 from "../../assets/pics/st4.jpg";
import r24 from "../../assets/pics/st5.jpg";
import r25 from "../../assets/pics/st6.jpg";
import r26 from "../../assets/pics/st7.jpg";

const images = [
  r0,
  r1,
  r2,
  r3,
  r4,
  r5,
  r6,
  r7,
  r8,
  r9,
  r10,
  r11,
  r12,
  r13,
  r14,
  r15,
  r16,
  r17,
  r18,
  r19,
  r20,
  r21,
  r22,
  r23,
  r24,
  r25,
  r26,
];

const index = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action == "next") {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action == "prev") {
      setData({ img: images[i - 1], i: i - 1 });
    } else if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {data.img ? (
        <div className="img-displayer">
          <IconButton
            onClick={() => imgAction()}
            sx={{
              position: "absolute",
              right: "7%",
              top: "7%",
              backgroundColor: "rgba(0, 0, 0)",
            }}
          >
            <CloseIcon sx={{ color: "purple", fontSize: "2.5rem" }} />
          </IconButton>

          <Grid
            container
            justifyContent="center"
            sx={{ position: "absolute", bottom: "5%" }}
            spacing={10}
          >
            <Grid item>
              <IconButton
                onClick={() => imgAction("prev")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateBeforeIcon sx={{ color: "purple" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => imgAction("next")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateNextIcon sx={{ color: "purple" }} />
              </IconButton>
            </Grid>
          </Grid>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            loading="lazy"
          />
        </div>
      ) : null}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item justifyContent="center" sx={{ marginTop: 5 }}>
          <Typography align="center" variant="h2" color="primary">
            Embark on a Voyage of Refinement: Explore the Enchanting Gallery of
            Our Hotel
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3">
          Our Rooms
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return i <= 8 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3">
          Restaurant and Bar
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 8 < i && i <= 17 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3">
          Some Other Places
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 17 < i && i <= 26 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default index;
