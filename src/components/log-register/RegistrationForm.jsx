import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
const RegistrationForm = () => {
  return (
    <Row>
      <section className="queen-wrapper">
        <h2 className="h2-queen">Creating a new Queen</h2>{" "}
        <Spinner animation="grow" size="sm" className="d-none d-md-block" />
        <Spinner
          animation="grow"
          size="sm"
          className="ms-1 d-none d-md-block"
        />
        <Spinner
          animation="grow"
          size="sm"
          className="ms-1 d-none d-md-block"
        />
      </section>

      <Col className="d-flex justify-content-center align-items-center">
        <section className="form-wrapper ">
          <Form className="flex-grow-1">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="marsha p" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="johnson" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="best-queen-evah@stonewall.net"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="queenOfTheDrag" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="iykyk" />
            </Form.Group>
            <Button id="btn-registration" variant="yellow" type="submit">
              Push me
            </Button>
          </Form>
        </section>
      </Col>
    </Row>
  );
};
export default RegistrationForm;
