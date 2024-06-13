import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import { Link } from "react-router-dom";
import EnumPaths from "../../../router/EnumPaths";
import "./top-nav.scss";

type TMobileNavProps = {
  brandLabel: string;
};

const TopNav = ({ brandLabel }: TMobileNavProps) => {
  return (
    <Navbar className="justify-content-between" id="top-nav-bar">
      <Container>
        <NavbarBrand>
          <Link to={EnumPaths.ABOUT_ME}>{brandLabel}</Link>
        </NavbarBrand>
      </Container>
      <Container className="justify-content-end">
        <Link to={EnumPaths.ABOUT_ME} className="mx-2">
          About Me
        </Link>
        <Link to={EnumPaths.BIO} className="mx-2">
          Bio
        </Link>
        <Link to={EnumPaths.MY_WORK} className="mx-2">
          My work
        </Link>
        <Link to={EnumPaths.LETS_TALK} className="mx-2">
          Lets talk
        </Link>
      </Container>
    </Navbar>
  );
};

export default TopNav;
