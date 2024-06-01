import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";
import Container from "react-bootstrap/Container";

const Projects = () => {
  return (
    <Container fluid>
      <h1>Projects</h1>
      <Link to={EPagesPaths.CONTACT}>Contact</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
      <Link to={EPagesPaths.RESUME}>Resume</Link>
    </Container>
  );
};

export default Projects;
