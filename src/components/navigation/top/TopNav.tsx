import { Navbar, Nav, Container } from "react-bootstrap";
import NavBrand from "../brand/NavBrand";
import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./top-nav.css";

const TopNav = () => {
  const brandLabel: string = "Brand";

  return (
    <Navbar className="top-nav-container">
      <Container fluid>
        <NavBrand label={brandLabel} />
        <Nav className="ms-auto">
          <Nav.Link as={Link} to={EPagesPaths.CONTACT} className="nav-link">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.RESUME} className="nav-link">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to={EPagesPaths.PROJECTS} className="nav-link">
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
