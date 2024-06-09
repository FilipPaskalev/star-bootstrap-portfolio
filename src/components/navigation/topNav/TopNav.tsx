import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

type TMobileNavProps = {
  brandLabel: string;
};

const TopNav = ({ brandLabel }: TMobileNavProps) => {
  return (
    <Container>
      <Nav className="justify-content-end" activeKey="/home">
        <NavbarBrand href="/home">{brandLabel}</NavbarBrand>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default TopNav;
