import WatchList from "../mood-watching/WatchList";
import Loading from "/src/components/Loading.jsx";
import CustomAlert from "/src/components/CustomAlert.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, logOutUser } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfilePage = () => {
  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };
  return (
    <>
      {isLoading && <Loading />}
      {error && (
        <CustomAlert text="Something went wrong, please try to log in again" />
      )}
      <Container fluid className=" flex-grow-1 bg-bg-header-footer">
        <Row className="hero text-center">
          <Col xs={12} lg={8}>
            <h1 className="fw-bold fs-2">Hi, {user.username || "Stranger"}</h1>
          </Col>
          <Col xs={12} lg={3} id="logo">
            <i className="bi bi-camera-reels me-2 display-1"></i>
            <i className="bi bi-rainbow display-1"></i>
          </Col>
        </Row>
      </Container>
      <Container fluid className="flex-grow-1 ">
        <Row>
          <Col xs={12} md={4} lg={5}>
            <Row>
              <Col
                xs={12}
                className=" align-items-center justify-content-center d-flex flex-column"
              >
                <Image
                  fluid
                  src={user.avatarURL || "https://placebear.com/g/400/600"}
                  className="profile_pic rounded-circle m-1"
                />
              </Col>
              <Col xs={12}>
                <WatchList />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={7} lg={6}>
            <section className="bg-violet p-1 rounded-1 my-3">
              <article className="bg-blue p-1 rounded-1">
                <article className="bg-green p-1 rounded-1">
                  <article className="bg-yellow p-1 rounded-1">
                    <article className="bg-orange p-1 rounded-1">
                      <article className="bg-red p-1 rounded-1">
                        <article className="bg-dark-grey p-1 rounded-1">
                          <h3 className="text-light text-center">
                            Your Details
                          </h3>
                        </article>
                      </article>
                    </article>
                  </article>
                </article>
              </article>
            </section>
            <section className="bg-text-dark text-text-light text-center rounded-1 border-bg-main d-flex justify-content-evenly align-items-center p-2 my-2">
              <article>
                <h6>
                  Name: <span className="ms-1">{user.name}</span>
                </h6>
              </article>
            </section>
            <section className="bg-text-dark text-text-light text-center rounded-1 border-bg-main d-flex justify-content-evenly align-items-center p-2 my-2">
              <article>
                <h6>
                  Surname: <span className="ms-1">{user.surname}</span>
                </h6>
              </article>
            </section>
            <section className="bg-text-dark text-text-light text-center rounded-1 border-bg-main d-flex justify-content-evenly align-items-center p-2 my-2">
              <article>
                <h6>
                  Email: <span className="ms-1">{user.email}</span>
                </h6>
              </article>
            </section>
            <section className="bg-text-dark text-text-light text-center rounded-1 border-bg-main d-flex justify-content-evenly align-items-center p-2 my-2">
              <article>
                <h6>
                  Username: <span className="ms-1">{user.username}</span>
                </h6>
              </article>
            </section>
            <section className="bg-text-dark text-text-light text-center rounded-1 border-bg-main d-flex justify-content-evenly align-items-center p-2 my-2">
              <article>
                <h6>
                  Password: <span className="ms-1">{user.password}</span>
                </h6>
              </article>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              onClick={handleLogout}
              className="btn login-btn p-3 m-5 text-text-dark "
            >
              Log out <i className="ms-1 bi bi-rainbow display-4"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
