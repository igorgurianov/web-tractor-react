import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/Home";
import Header from "./layouts/Header";
import GalleryPage from "./pages/Gallery";
import EquipmentPage from "./pages/Equipment";
import TractorsCataloguePage from "./pages/Tractors-catalogue";
import AboutPage from "./pages/About";
import NewsCatalogue from "./pages/News-catalogue";
import SingleNewsPage from "./pages/Single-news-page";
import ServicesCatalogue from "./pages/Services-catalogue";
import SingleTractorPage from "./pages/Single-tractor-page";
import SingleSparePage from "./pages/Single-spare-page";
import CataloguePage from "./pages/Catalogue-page";
import SingleServicePage from "./pages/Single-service-page";
import Modal from "./components/Modal";
import ContactUsForm from "./call-to-action/ContactUsForm";
import Footer from "./layouts/Footer";
import ScrollToTop from "./utils/scrollToTop";
import { setContent } from "./services/actions/content";
import tractorData from "./utils/data";

function App() {
  const dispatch = useDispatch();
  const { contactSuccess, contactPopup } = useSelector((store) => store.form);

  useEffect(() => {
    dispatch(setContent(tractorData));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/eqipment" element={<EquipmentPage />} />
            <Route path="/eqipment/:id" element={<CataloguePage />} />
            <Route path="/eqipment/engine/:id" element={<SingleSparePage />} />
            <Route path="/eqipment/spare/:id" element={<SingleSparePage />} />
            <Route path="/eqipment/blade/:id" element={<SingleSparePage />} />
            <Route path="/tractors" element={<TractorsCataloguePage />} />
            <Route path="/tractors/:id" element={<SingleTractorPage />} />
            <Route path="/tractors/:id/:tab" element={<SingleTractorPage />} />
            <Route path="/services" element={<ServicesCatalogue />} />
            <Route path="/services/:id" element={<SingleServicePage />} />
            <Route path="/news" element={<NewsCatalogue />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
        {contactPopup && (
          <Modal>
            <ContactUsForm />
          </Modal>
        )}
        {contactSuccess && (
          <Modal>
            <ContactUsForm />
          </Modal>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
