import React from "react";
import {BsArrowDownCircle} from 'react-icons/bs'
export default function Navbar() {

  const links = [
    { name: "Home", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Customers", path: "/customers" },
    { name: "Products", path: "/products" },
    { name: "Discounts", path: "/discounts" },
    { name:"New Product", path:"products/new" },
  ];


  return (
    <nav className="w-full">
      <div className="flex justify-between items-center">
      <h3 className="text-2xl font-bold">MaMarket</h3>
      <button
          className="flex md:hidden border-1 active:bg-indigo-500 border-indigo-500 m-2
        text-indigo-500 active:text-white uppercase focus:shadow-lg"
        type="button" data-bs-toggle="collapse" data-bs-target="#collapseNav" aria-expanded="false" aria-controls="collapseNav"
      >
        Menu
        {/* <BsArrowDownCircle className="fill-indigo-500 active:fill-white "/> */}
        </button>
      </div>
      <div id="collapseNav" className=" lg:flex lg:visible transition duration-150 ease-in-out">
        <ul className="w-full flex flex-col justify-start  lg:flex-row lg:justify-between">
          {links.map((link) => (
            <li className="w-fit flex">
              <a className="w-fit flex justify-center" href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
