import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
  technologies: string[];
};

const ProjectCard = ({ title, description, imgSrc, technologies }: Props) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="text-center">
          <strong>Used technologies</strong>
          <div>
            {technologies.map((tech, index) => (
              <Badge key={index} pill className="mx-1">
                {tech}
              </Badge>
            ))}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProjectCard;
