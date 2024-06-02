import Container from "react-bootstrap/Container";
import Navigation from "../../nav/Navigation";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Home = () => {
  return (
    <Container className="p-0" fluid>
      <Row>
        <Col lg={12} xl={2}>
          <Navigation />
        </Col>
        <Col lg={12} xl={10}>
          <h1>Home</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
