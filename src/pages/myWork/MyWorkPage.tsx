import ProjectsCarousel from "../../components/carousel/ProjectsCarousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./my-work-page.scss";
import ProjectCard from "../../components/cards/ProjectCard";

const MyWorkPage = () => {
  const img: string = "https://placehold.co/120x60";
  return (
    <>
      <ProjectsCarousel />
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4 mt-5">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col key={idx}>
            <ProjectCard
              title="Project"
              description="Mollit sint nisi exercitation sint esse fugiat reprehenderit eiusmod minim commodo enim reprehenderit in nulla."
              imgSrc={img}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyWorkPage;
