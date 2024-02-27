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
import NotFoundPage from "./pages/NotFoundPage";
import RepairPopup from "./components/RepairPopup";
import RepairForm from "./call-to-action/RepairForm";
import LargeImagePopup from "./components/LargeImagePopup";
import CatalogDt75 from "./pages/tractors/CatalogDt75";
import CatalogHtzT150 from "./pages/tractors/CatalogHtzT150";

function App() {
  const dispatch = useDispatch();
  const { contactSuccess, contactPopup } = useSelector((store) => store.form);
  const { repairPopup, repairForm, repairFormSuccess } = useSelector(
    (store) => store.repair
  );

  const license = useSelector((store) => store.license);

  //console.log(license);

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
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/gallery/" element={<GalleryPage />} />
            <Route path="/eqipment/" element={<EquipmentPage />} />
            <Route path="/eqipment/:id/" element={<CataloguePage />} />
            <Route path="/eqipment/engine/:id/" element={<SingleSparePage />} />
            <Route path="/eqipment/spare/:id/" element={<SingleSparePage />} />
            <Route path="/eqipment/blade/:id/" element={<SingleSparePage />} />
            <Route path="/tractors" element={<TractorsCataloguePage />}></Route>
            <Route
              path="/tractors/catalog-htz-t150/"
              element={<CatalogHtzT150 />}
            />
            <Route path="/tractors/catalog-dt-75/" element={<CatalogDt75 />} />

            <Route
              path="/tractors/catalog-dt-75/:id/"
              element={<SingleTractorPage />}
            />
            <Route
              path="/tractors/catalog-htz-t150/:id/"
              element={<SingleTractorPage />}
            />

            <Route path="/services/" element={<ServicesCatalogue />} />
            <Route path="/news/" element={<NewsCatalogue />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
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
        {repairPopup && (
          <Modal>
            <RepairPopup />
          </Modal>
        )}
        {repairForm && (
          <Modal>
            <RepairForm />
          </Modal>
        )}
        {repairFormSuccess && (
          <Modal>
            <RepairForm />
          </Modal>
        )}

        {license.isOpen && (
          <Modal>
            <LargeImagePopup />
          </Modal>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
