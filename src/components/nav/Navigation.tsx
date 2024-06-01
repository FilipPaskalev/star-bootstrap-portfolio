import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import EPagesPaths from "../../enum/EPagesPaths";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to={EPagesPaths.CONTACT}>Contact</Link>
      <Link to={EPagesPaths.PROJECTS}>Projects</Link>
      <Link to={EPagesPaths.RESUME}>Resume</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
    </Navbar>
  );
};

export default Navigation;
