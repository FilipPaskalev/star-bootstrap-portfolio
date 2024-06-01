import Container from "react-bootstrap/Container";
import Navigation from "../../nav/Navigation";

const Home = () => {
  return (
    <Container fluid>
      <Navigation />
      <Container fluid>
        <h1>Home</h1>
      </Container>
    </Container>
  );
};

export default Home;
