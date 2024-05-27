import { useState } from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";
import { FaMoon, FaSun, FaLanguage } from "react-icons/fa";
import "./nav-brand.css";
import { useTranslation } from "react-i18next";
import { US, BG } from "country-flag-icons/react/3x2";

type NavBrandProps = {
  showIcons?: boolean;
  children?: React.ReactNode;
};

const NavBrand = ({ showIcons = true, children }: NavBrandProps) => {
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
      {showIcons && (
        <Container className="action-icons">
          <span onClick={toggleTheme} className="theme-icon">
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </span>
          <span onClick={toggleModal} className="language-icon">
            <FaLanguage />
          </span>
        </Container>
      )}
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
