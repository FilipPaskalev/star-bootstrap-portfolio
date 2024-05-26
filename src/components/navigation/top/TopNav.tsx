import { Navbar, Nav, Container } from "react-bootstrap";
import NavBrand from "../brand/NavBrand";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./top-nav.css";

const TopNav = () => {
  const brandLabel: string = "Brand";
  const homeLinkLabel: string = "Home";
  const contactLinkLabel: string = "Contact";
  const resumeLinkLabel: string = "Resume";
  const projectsLinkLabel: string = "Projects";

  return (
    <Navbar className="top-nav-bar">
      <Container fluid>
        <NavBrand label={brandLabel} />
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={EPagesPaths.HOME} className="nav-link">
            <FaHome className="nav-icon" />
            {homeLinkLabel}
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.CONTACT} className="nav-link">
            <FaEnvelope className="nav-icon" />
            {contactLinkLabel}
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.RESUME} className="nav-link">
            <FaFileAlt className="nav-icon" />
            {resumeLinkLabel}
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.PROJECTS} className="nav-link">
            <FaProjectDiagram className="nav-icon" />
            {projectsLinkLabel}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
