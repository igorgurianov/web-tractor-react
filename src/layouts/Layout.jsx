import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../components/Modal";
import ContactUsForm from "../call-to-action/ContactUsForm";
import PopupWithImage from "../components/PopupWithImage";
import FormSuccess from "../components/Form-success";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  const { isPopupOpen, imgPopup } = useContext(PopupContext);
  const { formSuccess, setFormSuccess } = useContext(PopupContext);

  return (
    <div>
      <Header />
      <main className="mx-auto ">
        <Outlet />
      </main>
      <Footer />
      {isPopupOpen === "open" && (
        <Modal>
          <ContactUsForm />
        </Modal>
      )}
      {imgPopup && (
        <Modal>
          <PopupWithImage />
        </Modal>
      )}
      {formSuccess && (
        <Modal>
          <FormSuccess />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
