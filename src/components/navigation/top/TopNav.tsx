import { Navbar, Nav, Container } from "react-bootstrap";
import NavBrand from "../brand/NavBrand";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./top-nav.css";

const TopNav = () => {
  return (
    <Navbar className="top-nav-container">
      <Container fluid>
        <NavBrand />
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={EPagesPaths.HOME} className="nav-link">
            <FaHome className="nav-icon" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.CONTACT} className="nav-link">
            <FaEnvelope className="nav-icon" /> Contact
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.RESUME} className="nav-link">
            <FaFileAlt className="nav-icon" /> Resume
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.PROJECTS} className="nav-link">
            <FaProjectDiagram className="nav-icon" /> Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
