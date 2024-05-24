/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import RegistrationForm from "/src/components/log-register/RegistrationForm.jsx";
import Loading from "/src/components/Loading.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const RegistrationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {isAuthenticated ? (
        <Container fluid className="flex-grow-1 d-flex flex-column">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} className="h-r">
              <h1>My Queen !</h1>
            </Col>
          </Row>
          <Row className="flex-grow-1 d-flex flex-column mt-3 mt-md-0 justify-content-center align-items-center mx-5 ">
            <Col
              xs={12}
              className="text-center d-md-flex flex-row justify-content-around align-items-baseline bg-violet rounded-top border border-light border border-4 border-bottom-0"
            >
              <p className=" text-light mt-2 fs-1 ">
                You're already in da house!
              </p>
            </Col>

            <Col
              xs={12}
              className="bg-dark-grey rounded-bottom border border-violet border border-4  border-top-0"
            >
              <p className="display-1 text-light my-5 d-flex justify-content-center align-items-center">
                (´♡‿♡`)
              </p>
            </Col>
            <Col xs={12}>
              <Link
                to="/auth/profile"
                className="btn login-btn p-1 p-sm-3 m-1 m-sm-5 text-text-dark fs-4"
              >
                Your Profile <i className="ms-1 bi bi-rainbow display-4"></i>
              </Link>
            </Col>
          </Row>
        </Container>
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
