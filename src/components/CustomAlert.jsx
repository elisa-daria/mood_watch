import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

// eslint-disable-next-line react/prop-types
const CustomAlert = ({ text }) => {
  return (
    <Container>
      <Row className="text-center m-auto">
        <Col xs={12}>
          <Alert id="alert">{text}</Alert>
        </Col>
      </Row>
    </Container>
  );
};
export default CustomAlert;
