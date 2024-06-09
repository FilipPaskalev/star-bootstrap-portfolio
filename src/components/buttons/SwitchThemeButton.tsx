import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaMoon, FaSun } from "react-icons/fa6";

// type SwitchThemeButtonProps = {};

const SwitchThemeButton = () => {
  return (
    <Form>
      <Row>
        <Col>
          <FaSun /> Light
        </Col>
        <Col>
          <Form.Check type="switch" />
        </Col>
        <Col>
          <FaMoon /> Dark
        </Col>
      </Row>
    </Form>
  );
};

export default SwitchThemeButton;
