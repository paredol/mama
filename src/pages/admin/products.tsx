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
      <div className="container content w-full">
        <div className="admin-page-header w-full">
          <div className="admin-page-header-content w-full flex justify-between">
            <div className="admin-page-header-title">
              <h1>Products</h1>
            </div>

            <div className="admin-page-header-right-align">
              <a className="admin-add-product-button" href="/products/new">
                <span>
                  Add product
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="admin-page-card w-full">
            <div className="admin-card-tab-actions">
              <ul className="inline-flex">
                <li className="p-3 admin-card-tab-action"><a>All</a></li>
                <li className="p-3 admin-card-tab-action"><a>Active</a></li>
                <li className="p-3 admin-card-tab-action"><a>Draft</a></li>
                <li className="p-3 admin-card-tab-action"><a>Archived</a></li>
              </ul>
            </div>

            <div className="admin-card-filters m-4 p-2 flex justify-between">
              <div className="admin-card-filter-search w-2/5">
                  <input className="admin-card-filter-product-search w-full" type="text"/>
              </div>

              <div className="admin-card-filter-search w-3/5">
                <div className="flex justify-between">
                  <div>
                    <a>Status</a>
                  </div>
                  <div>
                    <a>Product Type</a>
                  </div>
                  <div>
                    <a>Sort</a>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="admin-card-table">
              <table className="container products" id="products">
                <tr className="flex justify-evenly">
                  <th className="w-32"><input type="checkbox" className=""/></th>
                  <th className="w-full">Product</th>
                  <th className="w-96">Status</th>
                  <th className="w-full">Invetory</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr className="flex justify-evenly" key={key}>
                      <td className="w-32"><input type="checkbox" className=""/></td>
                      <td className="w-full" >{val.title}</td>
                      <td className="w-96">{val.status}</td>
                      <td className="w-full">{val.invetory}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
        </div>
        
      </div>
    </div>
  );
}
