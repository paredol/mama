import React from "react";
import "./products.css";

const data = [
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: false,
    invetory: 0,
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: false,
    invetory: 0,
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: false,
    invetory: 0,
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: false,
    invetory: 0,
    description: "Description",
  },
  {
    title: "Product Name",
    media: "http://www.w3.org/2000/svg",
    status: false,
    invetory: 0,
    description: "Description",
  },
];

export default function Products() {
  return (
    <div>
      <div className="col-8">
        <div className="row">
          <div className=" Col-4">Prooducts</div>
          <div className="col-8">
            <button>Add Product</button>
          </div>
        </div>
        {/* List of products */}

        <table className="col-12 products" id="products">
          <tr>
            <th>Product</th>
            <th>Status</th>
            <th>Invetory</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.title}</td>
                <td>{val.status}</td>
                <td>{val.invetory}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
