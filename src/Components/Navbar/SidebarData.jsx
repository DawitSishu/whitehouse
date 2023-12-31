import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome style={{ fontSize: "24px" }} />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfoCircle style={{ fontSize: "24px" }} />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <FaIcons.FaCartPlus style={{ fontSize: "24px" }} />,
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <FaIcons.FaImage style={{ fontSize: "24px" }} />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone style={{ fontSize: "24px" }} />,
    cName: "nav-text",
  },
  {
    title: "Rooms",
    icon: <FaIcons.FaBed style={{ fontSize: "24px" }} />,
    cName: "nav-dropdown",
    submenu: [
      { title: "King Room", path: "/king-room" },
      { title: "Single Room", path: "/single-room" },
      { title: "Standard Room", path: "/standard-room" },
      { title: "Twin Bed Room", path: "/twin-bed-room" },
    ],
  },
];
