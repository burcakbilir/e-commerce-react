import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import sofa_banner from "./Components/Assets/sofa_banner.png";
import chair_banner from "./Components/Assets/chair_banner.png";
import table_banner from "./Components/Assets/table_banner.png";
import frames_banner from "./Components/Assets/frames_banner.png";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/sofa"
            element={<ShopCategory category="sofa" banner={sofa_banner} />}
          />
          <Route
            path="/chair"
            element={<ShopCategory category="chair" banner={chair_banner} />}
          />
          <Route
            path="/table"
            element={<ShopCategory category="table" banner={table_banner} />}
          />
          <Route
            path="/frames"
            element={<ShopCategory category="frames" banner={frames_banner} />}
          />
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
