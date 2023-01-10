import React, { useState } from "react";
import { useUser } from "../api/firebase.services";
import Navbar from "../components/navigation/Navbar";
import SubNavbar from "../components/navigation/SubNavbar";

export default function Layout({ Page }: { Page: any }) {
  const [menu, setMenu] = useState(false);

  const user = useUser();

  return (
    <div className="h-screen flex justify-start flex-col">
      <Navbar menu={menu} setMenu={setMenu}  />
    <div className="flex flex-col md:flex-row h-full">
      {user ? <SubNavbar  menu={menu} setMenu={setMenu}/> : <></>}
      <div className="flex p-2 w-full items-center justify-center">
        <Page />
      </div>
      </div>
    </div>
  );
}
