import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import RegistrationForm from "/src/components/log-register/RegistrationForm.jsx";
import Loading from "/src/components/Loading.jsx";
import { useState, useEffect } from "react";

const RegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container fluid className="flex-grow-1 d-flex flex-column">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} className="h-r">
              <h1>To have access to the Queerdom sign up!</h1>
            </Col>
            <Col
              xs={12}
              className="text-center d-md-flex flex-row justify-content-around align-items-baseline bg-bg-main"
            >
              <p className="fs-5 text-light mt-2">
                You have the keys already?!
              </p>
              <Link to="/auth/login" className="btn login-btn p-3 m-5">
                Log in <i className="bi bi-rainbow display-4"></i>
              </Link>
            </Col>
          </Row>
          <RegistrationForm />
        </Container>
      )}
    </>
  );
};
export default RegistrationPage;
