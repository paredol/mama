import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";

export default function Layout({ Page }) {
  return (
    <>
      <Navbar />
      <Page />
    </>
  );
}
