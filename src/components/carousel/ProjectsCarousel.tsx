import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const ProjectsCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image src="https://placehold.co/1200x400" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Quis aliquip excepteur non ad. Consequat sit est duis id eu anie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="https://placehold.co/1200x400" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Quis aliquip excepteur non ad. Consequat sit est duis id eu anie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://placehold.co/1200x400" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Quis aliquip excepteur non ad. Consequat sit est duis id eu anie.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectsCarousel;
