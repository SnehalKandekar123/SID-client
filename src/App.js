import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
// import About from "./pages/About";
import Categories from "./pages/Categories";

import Advertisement from "./pages/Advertisement";
import Contact from "./pages/Contact";
import RequestQuotation from "./pages/RequestQuotation";
import HandPowerTools from "./pages/HandPowerTools";
import SafetyMaterial from "./pages/SafetyMaterial";
import PackagingMaterial from "./pages/PackagingMaterial";
import StationeryMaterial from "./pages/StationeryMaterial";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}


        {/* <Route path="/gallery" element={<Gallery />} /> */}

        <Route path="/advertisement" element={<Advertisement />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/quotation" element={<RequestQuotation />} />

        <Route path="/categories" element={<Categories />} />

  

  <Route path="/" element={<Home />} />

  <Route path="/categories" element={<Categories />} />

  <Route path="/handpowertools" element={<HandPowerTools />} />

  <Route path="/safetymaterial" element={<SafetyMaterial />} />

  <Route path="/packagingmaterial" element={<PackagingMaterial />} />

  <Route path="/stationerymaterial" element={<StationeryMaterial />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;