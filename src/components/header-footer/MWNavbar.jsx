import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MWNavbar = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} className="fw-bold">
          <i className="bi bi-camera-reels me-2"></i>
          <i className="bi bi-rainbow"></i> Mood Watcher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={`fw-bold nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>

            {isAuthenticated ? (
              <Link
                to="/auth/profile"
                className={`fw-bold nav-link ${
                  location.pathname === "/auth/profile" ? "active" : ""
                }`}
              >
                {`Hi, ${user}`}
              </Link>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className={`fw-bold nav-link ${
                    location.pathname === "/auth/login" ? "active" : ""
                  }`}
                >
                  Log In
                </Link>
                <Link
                  to="/auth/register"
                  className={`fw-bold nav-link ${
                    location.pathname === "/auth/register" ? "active" : ""
                  }`}
                >
                  Register
                </Link>
              </>
            )}
            <NavDropdown
              title="About Us"
              id="basic-nav-dropdown"
              className="dropdown-menu-end"
            >
              <NavDropdown.Item href="/auth/register">Boh</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MWNavbar;
