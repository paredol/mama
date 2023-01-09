import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import SubNavbar from "../components/navigation/SubNavbar";

export default function Layout({ Page }: { Page: any }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="h-screen flex justify-start flex-col">
      <Navbar menu={menu} setMenu={setMenu}  />
    <div className="flex flex-col md:flex-row h-full">
      <SubNavbar  menu={menu} setMenu={setMenu}/>
      <div className="flex p-2 w-full items-center justify-center">
        <Page />
      </div>
      </div>
    </div>
  );
}
