import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Loading from "/src/components/Loading.jsx";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = "mock token";
      localStorage.setItem("token", token);
      dispatch(logInUser({ email, token }));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Login failed " + error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container fluid className="flex-grow-1 d-flex flex-column">
          <Row>
            <Col xs={12} className="h-l">
              <h1>Enter the keys to your Realm </h1>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center flex-grow-1">
            <Col xs={12} md={9}>
              <section className="bg-violet p-2">
                <section className="bg-blue p-2">
                  <section className="bg-green p-2">
                    <section className="bg-yellow p-2">
                      <section className="bg-orange p-2">
                        <section className="login-section">
                          <Form onSubmit={handleLogin}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmailLog"
                            >
                              <Form.Label className="text-text-dark fs-2">
                                Email
                              </Form.Label>
                              <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicPwLog"
                              onChange={(e) => setPassword(e.target.value)}
                            >
                              <Form.Label className="text-text-dark fs-2">
                                Password
                              </Form.Label>
                              <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Form.Group>
                            <Button
                              id="btn-registration"
                              variant="yellow"
                              type="submit"
                            >
                              Go
                            </Button>
                          </Form>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Login;
