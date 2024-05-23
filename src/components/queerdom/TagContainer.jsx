/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const TagContainer = () => {
  return (
    <Container fluid className="flex-grow-1">
      <Row>
        <Col xs={12}>
          <section className="bg-bg-main">
            <div className="position-relative bg-dark-grey">
              <div className="position-absolute top-0 start-0">
                <Button variant="red" size="lg">
                  Let's go
                </Button>
              </div>
              <div className="position-absolute top-0 end-0">
                <Button variant="orange" size="lg">
                  Let's go
                </Button>
              </div>
              <div className="position-absolute top-50 start-50">
                <Button variant="yellow" size="lg">
                  Let's go
                </Button>
              </div>
              <div className="position-absolute bottom-50 end-50">
                <Button variant="green" size="lg">
                  Let's go
                </Button>
              </div>
              <div className="position-absolute bottom-0 start-0">
                <Button variant="blue" size="lg">
                  Let's go
                </Button>
              </div>
              <div className="position-absolute bottom-0 end-0">
                <Button variant="violet" size="lg">
                  Let's go
                </Button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default TagContainer;
