import React from "react";
import "./products.css";

const data = [
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: "Active",
    invetory: 0,
    type:"",
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: "Draft",
    invetory: 0,
    type:"",
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: "Achived",
    invetory: 0,
    type:"",
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: "Active",
    invetory: 0,
    type:"",
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: "Achived",
    invetory: 0,
    type:"",
    description: "Description",
  },
];

export default function Products() {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between">
          <div>Prooducts</div>
          <div>
            <button>Add Product</button>
          </div>
        </div>


        <table className="container products" id="products">
          <tr className="flex justify-evenly">
            <th><input type="checkbox" className=""/></th>
            <th className="w-full">Product</th>
            <th className="w-full">Status</th>
            <th className="w-full">Invetory</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr className="flex justify-evenly" key={key}>
                <td className="w-full" ><input type="checkbox" className="w-"/></td>
                <td className="w-full" >{val.title}</td>
                <td className="w-full">{val.status}</td>
                <td className="w-full">{val.invetory}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
