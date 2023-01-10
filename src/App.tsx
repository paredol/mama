import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "./common/utils";

// Routes
import Home from "./pages/Home";
import SignUp from "./pages/customer/onboarding/signup";
import SignIn from "./pages/customer/onboarding/signin";
import Admin from "./pages/admin/admin";
import Layout from "./pages/layout";
import Products from "./pages/admin/products";
import Customers from "./pages/admin/customers";
import Orders from "./pages/admin/orders";
import Discounts from "./pages/admin/discount";
import NewProducts from "./pages/admin/newProduct";

function App() {
  useTheme();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Page={Home} />} />
          {/* Customer routes */}
          <>
          <Route path="/signup" element={<Layout Page={SignUp} />} />
            <Route path="/signin" element={<Layout Page={SignIn} />} />
          </>
          {/*Admin routes*/}
          <>
          <Route path="/admin" element={<Layout Page={Admin} />} />
          <Route path="/products" element={<Layout Page={Products} />} />
          <Route path="/customers" element={<Layout Page={Customers} />} />
          <Route path="/orders" element={<Layout Page={Orders} />} />
          <Route path="/discounts" element={<Layout Page={Discounts} />} />
            <Route path="/products/new" element={<Layout Page={NewProducts} />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
