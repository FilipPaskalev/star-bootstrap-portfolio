// React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// Components
import NavBrand from "../brand/NavBrand";
// React-Router
import { Link } from "react-router-dom";
// React-Icons
import { FaHome, FaEnvelope, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
// Enums
import EPagesPaths from "../../../enum/EPagesPaths";
// i18n
import { useTranslation } from "react-i18next";
// Styles
import "./top-nav.css";

const TopNav = () => {
  const { t } = useTranslation();

  return (
    <Navbar className="top-nav-container">
      <Container fluid>
        <NavBrand />
        <Navbar className="top-nav-container">
          <Container fluid>
            <NavBrand />
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={EPagesPaths.HOME} className="nav-link">
                <FaHome className="nav-icon" /> {t("home")}
              </Nav.Link>
              <Nav.Link as={Link} to={EPagesPaths.CONTACT} className="nav-link">
                <FaEnvelope className="nav-icon" /> {t("contact")}
              </Nav.Link>
              <Nav.Link as={Link} to={EPagesPaths.RESUME} className="nav-link">
                <FaFileAlt className="nav-icon" /> {t("resume")}
              </Nav.Link>
              <Nav.Link as={Link} to={EPagesPaths.PROJECTS} className="nav-link">
                <FaProjectDiagram className="nav-icon" /> {t("projects")}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default TopNav;
