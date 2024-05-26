import { useState } from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";
import { FaMoon, FaSun, FaLanguage } from "react-icons/fa";
import "./nav-brand.css";

const NavBrand = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // TODO: Implement theme change logic
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Language</Modal.Title>
        </Modal.Header>
        {/* // TODO: finish implementation changing the language /from utils/changeLanguage.tsx */}
        <Modal.Body>
          <Button variant="primary" onClick={() => alert("Language set to English")}>
            English
          </Button>
          <Button variant="secondary" onClick={() => alert("Language set to Spanish")}>
            Spanish
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar.Brand>
  );
};

export default NavBrand;
