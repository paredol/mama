import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import Onboarding from "./pages/customer/onboarding/onboarding";
import Home from "./pages/admin/home";
import Layout from "./pages/layout";
import Products from "./pages/admin/products";
import Customers from "./pages/admin/customers";
import Orders from "./pages/admin/orders";
import Discounts from "./pages/admin/discount";
import NewProducts from "./pages/admin/newProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Customer routes */}
          <Route path="/signup" element={<Layout Page={Onboarding} />} />
          {/*Admin routes*/}
          <Route path="/" element={<Layout Page={Onboarding} />} />
          <Route path="/admin" element={<Layout Page={Home} />} />
          <Route path="/products" element={<Layout Page={Products} />} />
          <Route path="/customers" element={<Layout Page={Customers} />} />
          <Route path="/orders" element={<Layout Page={Orders} />} />
          <Route path="/discounts" element={<Layout Page={Discounts} />} />
          <Route path="/products/new" element={<Layout Page={NewProducts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
