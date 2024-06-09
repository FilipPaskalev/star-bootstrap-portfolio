import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import SwitchThemeButton from "../../buttons/SwitchThemeButton";
import { Link } from "react-router-dom";
import EnumPaths from "../../../router/EnumPaths";
import { FaAlignJustify } from "react-icons/fa6";
import "./mobile-nav.scss";

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
        <Button onClick={showMenu}>
          <FaAlignJustify />
        </Button>

        <Offcanvas show={show} onHide={closeMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{brandLabel}</Offcanvas.Title>
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
              <Container>
                <Link to={EnumPaths.ABOUT_ME} onClick={closeMenu}>
                  About Me
                </Link>
                <Link to={EnumPaths.BIO} onClick={closeMenu}>
                  Bio
                </Link>
                <Link to={EnumPaths.MY_WORK} onClick={closeMenu}>
                  My Work
                </Link>
                <Link to={EnumPaths.LETS_TALK} onClick={closeMenu}>
                  Lets Talk
                </Link>
              </Container>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Container>
  );
};

export default MobileNav;
