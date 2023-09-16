// import "swiper/css/bundle";
import "./App.css";
import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import GalleryPage from "./pages/Gallery";
import EquipmentPage from "./pages/Equipment";
import TractorsCataloguePage from "./pages/Tractors-catalogue";
import NotFoundPage from "./pages/Not-found";
import AboutPage from "./pages/About";
import Layout from "./layouts/Layout";
import NewsCatalogue from "./pages/News-catalogue";
import SingleNewsPage from "./pages/Single-news-page";
import ServicesCatalogue from "./pages/Services-catalogue";
import SingleTractorPage from "./pages/Single-tractor-page";
import SingleSparePage from "./pages/Single-spare-page";
import CataloguePage from "./pages/Catalogue-page";

import { PopupProvider } from "./context/PopupContext";
import SingleServicePage from "./pages/Single-service-page";

function App() {
  return (
    <div className="App">
      <PopupProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="about-us" element={<Navigate to="/about" replace />} /> */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/eqipment" element={<EquipmentPage />} />
            <Route path="/eqipment/:id" element={<CataloguePage />} />
            <Route path="/eqipment/engine/:id" element={<SingleSparePage />} />
            <Route path="/eqipment/spare/:id" element={<SingleSparePage />} />
            <Route path="/eqipment/blade/:id" element={<SingleSparePage />} />
            <Route path="/tractors" element={<TractorsCataloguePage />} />
            <Route path="/tractors/:id" element={<SingleTractorPage />} />
            <Route path="/services" element={<ServicesCatalogue />} />
            <Route path="/services/:id" element={<SingleServicePage />} />
            <Route path="/news" element={<NewsCatalogue />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PopupProvider>
    </div>
  );
}

export default App;
