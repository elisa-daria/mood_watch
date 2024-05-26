import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Loading from "/src/components/Loading.jsx";
import CustomAlert from "/src/components/CustomAlert.jsx";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      if (!name || !surname || !username || !email || !password) {
        setIsLoading(false);
        setError(true);
        setErrorMsg("All fields are required.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        setError(true);
        setErrorMsg("Invalid email address");
        setIsLoading(false);
        return;
      }

      const response = await fetch("http://localhost:3002/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          username,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        setIsLoading(false);

        if (response.status === 400) {
          setError(true);
          const errorData = await response.json();
          setErrorMsg(errorData.message || "Email is already in use.");
        } else {
          setError(true);
          setErrorMsg("Something went wrong. Try again later.");
        }
        return;
      }

      const data = await response.json();
      setIsLoading(false);
      setError(false);
      setErrorMsg("");
      localStorage.setItem("newU_id", data.newU_id);
      navigate("/auth/login");
    } catch (err) {
      setIsLoading(false);
      setError(true);
      setErrorMsg("Something went wrong. Try again later.");
      console.log(err);
    } finally {
      setName("");
      setSurname("");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
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
            <Form className="flex-grow-1" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="marsha p"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="johnson"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="best-queen-evah@stonewall.net"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="queenOfTheDrag"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="iykyk"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button id="btn-registration" variant="yellow" type="submit">
                Push me
              </Button>
            </Form>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Loading variant="yellow" />}
          {error && <CustomAlert text={errorMsg} />}
        </Col>
      </Row>
    </>
  );
};

export default RegistrationForm;
