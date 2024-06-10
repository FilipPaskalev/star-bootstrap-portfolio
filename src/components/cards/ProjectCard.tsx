import Card from "react-bootstrap/Card";

type Props = {
  title: string;
  description: string;
  imgSrc: string;
};

const ProjectCard = ({ title, description, imgSrc }: Props) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
