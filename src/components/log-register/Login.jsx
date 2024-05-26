import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Loading from "/src/components/Loading.jsx";
import CustomAlert from "/src/components/CustomAlert.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../redux/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [newU, setNewU] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(logInUser({ email, password }));
  };
  const handleNewU = () => {
    const newUserId = localStorage.getItem("newU_id");
    if (newUserId) {
      setNewU(true);
    }
  };

  useEffect(() => {
    handleNewU();
  }, []);

  return isAuthenticated ? (
    <Container
      fluid
      className="flex-grow-1 d-flex flex-column align-items-center justify-content-center"
    >
      <Row>
        <Col xs={12} className="h-l rounded-2 bg-bg-main">
          <h1>Hi there! </h1>
        </Col>
        <CustomAlert text="Welcome home" />
        <Col>
          <Col xs={12} className="text-center " id="logo">
            <i className="bi bi-camera-reels me-2 display-1"></i>
            <i className="bi bi-rainbow display-1"></i>
            {/* <img src={MWlogo} alt="logo" id="logo" /> */}
          </Col>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row>
        <Col xs={12} className="h-l">
          <h1>Enter the keys to your Realm </h1>
        </Col>
        {isLoading && <Loading />}
        {newU && (
          <CustomAlert text="Registration was successful! You are now one of the Queens!" />
        )}
        {error && <CustomAlert text="Invalid email or password" />}
      </Row>
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col xs={12} md={9} className="mb-3 mb-md-0">
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
                        <Form.Group className="mb-3" controlId="formBasicPwLog">
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
  );
  //   <Container fluid className="flex-grow-1 d-flex flex-column">
  //     <Row>
  //       <Col xs={12} className="h-l">
  //         <h1>Enter the keys to your Realm </h1>
  //       </Col>
  //       {isLoading && <Loading />}
  //       {newU && (
  //         <CustomAlert text="Registration was successful! You are now one of the Queens!" />
  //       )}
  //       {error && <CustomAlert text="Invalid email or password" />}
  //     </Row>
  //     <Row className="justify-content-center align-items-center flex-grow-1">
  //       <Col xs={12} md={9} className="mb-3 mb-md-0">
  //         <section className="bg-violet p-2">
  //           <section className="bg-blue p-2">
  //             <section className="bg-green p-2">
  //               <section className="bg-yellow p-2">
  //                 <section className="bg-orange p-2">
  //                   <section className="login-section">
  //                     <Form onSubmit={handleLogin}>
  //                       <Form.Group
  //                         className="mb-3"
  //                         controlId="formBasicEmailLog"
  //                       >
  //                         <Form.Label className="text-text-dark fs-2">
  //                           Email
  //                         </Form.Label>
  //                         <Form.Control
  //                           type="email"
  //                           value={email}
  //                           onChange={(e) => setEmail(e.target.value)}
  //                         />
  //                       </Form.Group>
  //                       <Form.Group
  //                         className="mb-3"
  //                         controlId="formBasicPwLog"
  //                       >
  //                         <Form.Label className="text-text-dark fs-2">
  //                           Password
  //                         </Form.Label>
  //                         <Form.Control
  //                           type="password"
  //                           value={password}
  //                           onChange={(e) => setPassword(e.target.value)}
  //                         />
  //                       </Form.Group>
  //                       <Button
  //                         id="btn-registration"
  //                         variant="yellow"
  //                         type="submit"
  //                       >
  //                         Go
  //                       </Button>
  //                     </Form>
  //                   </section>
  //                 </section>
  //               </section>
  //             </section>
  //           </section>
  //         </section>
  //       </Col>
  //     </Row>
  //   </Container>
  // </>
};
export default Login;
