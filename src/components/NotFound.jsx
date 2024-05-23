import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const NotFound = () => {
  return (
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row>
        <Col xs={12} className="h-l">
          <h1> Bear with me</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col
          xs={12}
          md={8}
          className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-text-dark"
        >
          <section className="bg-violet p-2">
            <section className="bg-blue p-2">
              <section className="bg-green p-2">
                <section className="bg-yellow p-2">
                  <section className="bg-orange p-2">
                    <section className="bg-red p-2">
                      <Image
                        fluid
                        src="https://placebear.com/g/400/500"
                        className="rounded-1"
                      />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>

          <p className="text-bg-main fs-1 my-2">404 Not Found ¯\_(ツ)_/¯</p>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
