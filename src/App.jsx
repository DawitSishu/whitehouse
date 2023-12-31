import React, { Suspense } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";

const Contact = React.lazy(() => import("./Components/Contact"));
const Gallery = React.lazy(() => import("./Components/Gallery"));
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Services = React.lazy(() => import("./Components/Services"));
// const Menu = React.lazy(() => import("./Components/Menu"));
// const Rooms = React.lazy(() => import("./Components/Rooms"));
const King = React.lazy(() => import("./Components/Rooms/KingRoom"));
const Twin = React.lazy(() => import("./Components/Rooms/TwinBedRoom"));
const Single = React.lazy(() => import("./Components/Rooms/SingleRoom"));
const Standard = React.lazy(() => import("./Components/Rooms/StandardRoom"));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#FFD700",
      // main: "#f3e9f7",
      main: "#FFEE49",
    },
    secondary: {
      main: "#800080",
    },
    background: {
      background: {
        default: "linear-gradient(160deg, #011b2a 0%, #80cbc3 100%)",
      },
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(160deg, #011b2a 0%, #80cbc3 100%)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            exact
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            exact
            path="/king-room"
            element={
              <Suspense fallback={<Loader />}>
                <King />
              </Suspense>
            }
          />
          <Route
            exact
            path="/single-room"
            element={
              <Suspense fallback={<Loader />}>
                <Single />
              </Suspense>
            }
          />
          <Route
            exact
            path="/standard-room"
            element={
              <Suspense fallback={<Loader />}>
                <Standard />
              </Suspense>
            }
          />
          <Route
            exact
            path="/twin-bed-room"
            element={
              <Suspense fallback={<Loader />}>
                <Twin />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
