import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";

const Contact = () => {
  return (
    <Container fluid>
      <h1>Contact page</h1>
      <Link to={EPagesPaths.PROJECTS}>Projects</Link>
      <Link to={EPagesPaths.RESUME}>Resume</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
    </Container>
  );
};

export default Contact;
