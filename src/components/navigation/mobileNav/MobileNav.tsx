import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import SwitchThemeButton from "../../buttons/SwitchThemeButton";
import "./mobile-nav.scss";
import { Link } from "react-router-dom";

type TMobileNavProps = {
  brandLabel: string;
};

const MobileNav = ({ brandLabel }: TMobileNavProps) => {
  const [show, setShow] = useState(false);

  const closeMenu = () => setShow(false);
  const showMenu = () => setShow(true);

  return (
    <Container fluid>
      <Navbar>
        <h1>{brandLabel}</h1>
        <Button onClick={showMenu}>Launch</Button>

        <Offcanvas show={show} onHide={closeMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container>
              <Image src="holder.js/100px250" fluid />
              <Row>
                <Col>repos</Col>
                <Col>stars</Col>
                <Col>followers</Col>
              </Row>
              <SwitchThemeButton />
              <Link to="/home" onClick={closeMenu}>
                About Me
              </Link>
              <Link to="/resume" onClick={closeMenu}>
                My Resume
              </Link>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Container>
  );
};

export default MobileNav;
