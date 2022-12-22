import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/navbar";

export default function Layout({ Page }: { Page: any }) {
  return (
    <>
      <Navbar />
      <Page />
    </>
  );
}
