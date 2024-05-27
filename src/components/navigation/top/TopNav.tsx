import { Navbar, Nav, Container } from "react-bootstrap";
import NavBrand from "../brand/NavBrand";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./top-nav.css";
import { useTranslation } from "react-i18next";

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
                <FaHome className="nav-icon" /> {t("home")} {/* Use the 't' variable */}
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
