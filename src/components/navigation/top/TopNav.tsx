import { Container, Navbar } from "react-bootstrap";
import NavBrand from "../brand/NavBrand";

const TopNav = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavBrand />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
