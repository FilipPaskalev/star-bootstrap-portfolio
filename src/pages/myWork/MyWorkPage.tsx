import ProjectsCarousel from "../../components/carousel/ProjectsCarousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./my-work-page.scss";
import ProjectCard from "../../components/cards/ProjectCard";

const MyWorkPage = () => {
  // TODO: Replace with actual image URL from received data
  const img: string = "https://placehold.co/120x60";
  // TODO: delete this mock data and replace with actual data from received data
  const technologies: string[] = [
    "React",
    "TypeScript",
    "Bootstrap",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab",
    "GitHub",
    "Git",
    "Jira",
    "Confluence",
    "Slack",
    "Trello",
    "Postman",
    "Insomnia",
    "Swagger",
    "Jest",
    "Mocha",
    "Chai",
    "Cypress",
    "Selenium",
  ];

  return (
    <>
      <ProjectsCarousel />
      <Row xs={1} md={2} lg={3} xxl={4} className="g-4 mt-5">
        {Array.from({ length: 9 }).map((_, idx) => {
          // TODO: Replace with actual stack from received data
          // get random number of technologies
          const techStack = technologies.slice(
            0,
            Math.floor(Math.random() * technologies.length)
          );
          return (
            <Col key={idx}>
              <ProjectCard
                title="Project"
                description="Mollit sint nisi exercitation sint esse fugiat reprehenderit eiusmod minim commodo enim reprehenderit in nulla."
                imgSrc={img}
                technologies={techStack}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MyWorkPage;
