import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Offcanvas,
  Navbar,
  Container,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import {
  FaAlignJustify,
  FaFacebookMessenger,
  FaGitAlt,
  FaGithub,
  FaHouseUser,
  FaLaptopCode,
  FaPaperPlane,
  FaUserCheck,
  FaUserFriends,
} from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import EnumPaths from "../../../router/EnumPaths";
import SwitchThemeButton from "../../buttons/SwitchThemeButton";
import AVATAR from "../../../assets/avatar.png";
import "./mobile-nav.scss";
import { FaFileLines } from "react-icons/fa6";
import { Menu } from "../menu/Menu";

type TMobileNavProps = {
  brandLabel: string;
};

const MobileNav = ({ brandLabel }: TMobileNavProps) => {
  const [show, setShow] = useState(false);

  // const followers = 7;
  // const following = 25;
  // const repos = 39;

  const closeMenu = () => setShow(false);
  const showMenu = () => setShow(true);

  return (
    <Navbar>
      <Container className="d-flex justify-content-between align-items-center">
        <span>{brandLabel}</span>
        <Button variant="outline-secondary" onClick={showMenu}>
          <FaAlignJustify />
        </Button>
      </Container>
      <Offcanvas show={show} onHide={closeMenu}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{brandLabel}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu closeMenu={closeMenu} />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default MobileNav;
