import ProjectsCarousel from "../../components/carousel/ProjectsCarousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./my-work-page.scss";

const MyWorkPage = () => {
  return (
    <>
      <ProjectsCarousel />
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/120x60" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyWorkPage;
