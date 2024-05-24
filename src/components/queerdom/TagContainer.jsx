/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const TagContainer = () => {
  return (
    <Container fluid className="flex-grow-1 my-5">
      <Row>
        <Col xs={12}>
          <section className="bg-bg-main bg-dark-grey playground">
            <div className="position-relative wrapper ">
              <div className="position-absolute top-0 start-0">
                <Button variant="red" size="lg" className="playground-btn">
                  no lesbian dies
                </Button>
              </div>
              <div className="position-absolute top-0 end-0">
                <Button
                  variant="orange"
                  size="lg"
                  className="playground-btn  d-none d-sm-block"
                >
                  Garbo classic
                </Button>
              </div>
              <div className="position-absolute top-50 start-50">
                <Button variant="yellow" size="lg" className="playground-btn">
                  baby gays
                </Button>
              </div>
              <div className="position-absolute bottom-50 end-50">
                <Button variant="green" size="lg" className="playground-btn">
                  should've been more gay
                </Button>
              </div>
              <div className="position-absolute bottom-0 start-0">
                <Button
                  variant="blue"
                  size="lg"
                  className="playground-btn d-none d-sm-block"
                >
                  fruity juice
                </Button>
              </div>
              <div className="position-absolute bottom-0 end-0">
                <Button variant="violet" size="lg" className="playground-btn">
                  hidden in the closet
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
