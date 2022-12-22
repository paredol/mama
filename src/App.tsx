import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import Onboarding from "./pages/customer/onboarding/onboarding";
import Home from "./pages/admin/home";
import Layout from "./pages/layout";
import Products from "./pages/admin/products";
import Customers from "./pages/admin/customers";
import Orders from "./pages/admin/orders";
import Discounts from "./pages/admin/discount";

function App() {
  return (
    <div className="h-screen p-4 flex justify-start flex-col ">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
