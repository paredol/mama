import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Onboarding from "./pages/customer/onboarding/onboarding";
// import Layout from "./components/layout";
// import Home from "./pages/admin/home";
// import Products from "./pages/admin/products";
// import Customers from "./pages/admin/customers";
// import Orders from "./pages/admin/order";
// import Discounts from "./pages/admin/discount";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Customer routes */}
          <Route path="/signin" element={<Onboarding />} />
          {/*Admin routes*/}
          {/* <Route path="/" element={<Layout Page={Home} />} />
          <Route path="/products" element={<Layout Page={Products} />} />
          <Route path="/customers" element={<Layout Page={Customers} />} />
          <Route path="/orders" element={<Layout Page={Orders} />} />
          <Route path="/discounts" element={<Layout Page={Discounts} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
