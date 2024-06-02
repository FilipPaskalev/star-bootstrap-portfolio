import Navbar from "react-bootstrap/esm/Navbar";
import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";
import "./top-nav.scss";

const TopNav = () => {
  return (
    <Navbar id="top-nav">
      TopNav
      <Link to={EPagesPaths.CONTACT}>Contact</Link>
      <Link to={EPagesPaths.PROJECTS}>Projects</Link>
      <Link to={EPagesPaths.RESUME}>Resume</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
    </Navbar>
  );
};

export default TopNav;
