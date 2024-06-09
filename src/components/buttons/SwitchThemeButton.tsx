import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// type SwitchThemeButtonProps = {};

const SwitchThemeButton = () => {
  return (
    <Form>
      <Row>
        <Col>Light</Col>
        <Col>
          <Form.Check type="switch" />
        </Col>
        <Col>Dark</Col>
      </Row>
    </Form>
  );
};

export default SwitchThemeButton;
