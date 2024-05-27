import { useState } from "react";
// React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// Styles
import "./nav-brand.css";
// i18n translation
import { useTranslation } from "react-i18next";
// Icons
import { US, BG } from "country-flag-icons/react/3x2";
import { FaMoon, FaSun, FaLanguage } from "react-icons/fa";

type NavBrandProps = {
  children?: React.ReactNode;
};

const NavBrand = ({ children }: NavBrandProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // TODO: Implement logic to change theme
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    toggleModal();
  };

  return (
    <Navbar.Brand className="nav-brand-container">
      <Container className="action-icons">
        <span onClick={toggleTheme} className="theme-icon">
          {isDarkTheme ? <FaSun /> : <FaMoon />}
        </span>
        <span onClick={toggleModal} className="language-icon">
          <FaLanguage />
        </span>
      </Container>
      {children}
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t("selectLanguage")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={() => handleLanguageSelect("en")} className="modal-btn">
            <US title="United States" className="btn-icon" />
            {t("english")}
          </Button>
          <Button onClick={() => handleLanguageSelect("bg")} className="modal-btn">
            <BG title="Bulgaria" className="btn-icon" />
            {t("bulgarian")}
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal} className="modal-btn">
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar.Brand>
  );
};

export default NavBrand;
