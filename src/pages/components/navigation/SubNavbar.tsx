import React, { useState } from "react";
import {BsArrowDownCircle} from 'react-icons/bs'
import { navProps } from "@common/ui.d"

export default function SubNavbar({menu, setMenu}:navProps) {

  const links = [
    { name: "Home", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },
    { name: "Products", path: "/products" },
    { name: "Discounts", path: "/discounts" },
  ];

  return (
    <nav className={`${menu?"flex":"hidden"} md:flex w-fit px-2 pb-2 md:p-2`}>
      <div id="collapseNav" className="flex transition duration-150 ease-in-out">
        <ul className="w-full flex flex-col justify-start">
          {links.map((link, index) => (
            <li key={index}  className="w-fit flex">
              <a className="w-fit flex justify-center text-xl md:text-base" href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
