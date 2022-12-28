import React from "react";
import "./newProduct.css";

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

export default function newProduct(){
  return (
    <div>
      <div className="container">
       <form action="">
           <div>
             <label>Product Name</label>
             <textarea className="w-full h-64"/>
           </div>
          <label >Item identifier</label>
           <select name="item Identifier" id="itemIdentifier">
             <option value="GTIN">GTIN</option>
             <option value="ISBN">ISBN</option>
             <option value="UPC">UPC</option>
             <option value="EAN">EAN</option>
           </select>

           <label >Fullfillment</label>
            <select name="FullFilment" id="FulFilment">
                <option value="SellerFulfilled">Seller Fulfilled</option>
                <option value="MAAFRICAFulfilled">MA AFRICA Fulfilled</option>
           </select>
           
           <label>Product Category</label>
           <select name="FullFilment" id="FulFilment">
                <option value="SellerFulfilled">Seller Fulfilled</option>
                <option value="MAAFRICAFulfilled">MA AFRICA Fulfilled</option>
           </select>
         <input type="submit" value="Cancel"/>
         <input type="submit" value="Save as Draft"/>
         <input type="submit" value="Save"/>
       </form>
      </div>
    </div>
  );
}
