import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./side-nav.scss";

const SideNav = () => {
  return (
    <Navbar id="side-nav">
      Side nav
      <Link to={EPagesPaths.CONTACT}>Contact</Link>
      <Link to={EPagesPaths.PROJECTS}>Projects</Link>
      <Link to={EPagesPaths.RESUME}>Resume</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
    </Navbar>
  );
};

export default SideNav;
