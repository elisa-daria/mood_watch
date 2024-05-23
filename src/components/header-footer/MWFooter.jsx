import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const MWFooter = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} className="text-center">
          <ListGroup>
            <ListGroup.Item className="border-0 bg-bg-header-footer fs-3">
              Made with queer love <i className="bi bi-rainbow ms-2"></i>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default MWFooter;
