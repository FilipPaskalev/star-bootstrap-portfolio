import { useState } from "react";
// Router
import { Link } from "react-router-dom";
// Components
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import SwitchThemeButton from "../../buttons/SwitchThemeButton";
// Icons
import {
  FaAlignJustify,
  FaBookBookmark,
  FaFacebookMessenger,
  FaFileLines,
  FaGithub,
  FaHouseUser,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa6";
import { FaUserCheck, FaUserFriends } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
// Utils
import EnumPaths from "../../../router/EnumPaths";
// Styles
import "./mobile-nav.scss";

type TMobileNavProps = {
  brandLabel: string;
};

const MobileNav = ({ brandLabel }: TMobileNavProps) => {
  const [show, setShow] = useState(false);

  const followers: number = 7;
  const following: number = 25;
  const repos: number = 39;

  const closeMenu = () => setShow(false);
  const showMenu = () => setShow(true);

  return (
    <Container fluid>
      <Navbar>
        <span>{brandLabel}</span>
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
                <Col>
                  <FaGithub />
                </Col>
                <Col>
                  <TiSocialLinkedinCircular />
                </Col>
                <Col>
                  <FaFacebookMessenger />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FaBookBookmark /> {repos} repositories
                </Col>
                <Col>
                  <FaUserCheck />
                  {following} following
                </Col>
                <Col>
                  <FaUserFriends /> {followers} followers
                </Col>
              </Row>
              <Container>
                <Link to={EnumPaths.ABOUT_ME} onClick={closeMenu}>
                  <FaHouseUser /> About Me
                </Link>
                <Link to={EnumPaths.BIO} onClick={closeMenu}>
                  <FaFileLines /> Bio
                </Link>
                <Link to={EnumPaths.MY_WORK} onClick={closeMenu}>
                  <FaLaptopCode /> My Work
                </Link>
                <Link to={EnumPaths.LETS_TALK} onClick={closeMenu}>
                  <FaPaperPlane /> Lets Talk
                </Link>
              </Container>
              <SwitchThemeButton />
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Container>
  );
};

export default MobileNav;
