import { Link } from "react-router-dom";
import EPagesPaths from "../../../enum/EPagesPaths";
import Container from "react-bootstrap/Container";

const ResumePage = () => {
  return (
    <Container fluid>
      <h1>Resume</h1>
      <Link to={EPagesPaths.CONTACT}>Contact</Link>
      <Link to={EPagesPaths.HOME}>Home</Link>
      <Link to={EPagesPaths.PROJECTS}>Projects</Link>
    </Container>
  );
};

export default ResumePage;
