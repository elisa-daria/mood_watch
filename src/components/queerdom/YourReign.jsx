import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchingBar from "./SearchingBar";
import TagContainer from "./TagContainer";

const YourReign = () => {
  return (
    <>
      <Container fluid className="flex-grow-1 bg-bg-header-footer">
        <Row className="hero text-center">
          <Col xs={12} lg={8}>
            <h1 className="fw-bold display-2">Searching</h1>
          </Col>
          <Col xs={12} lg={3} id="logo">
            <i className="bi bi-camera-reels me-2 display-1"></i>
            <i className="bi bi-rainbow display-1"></i>
          </Col>
        </Row>
        <SearchingBar />
      </Container>
      <TagContainer />
    </>
  );
};
export default YourReign;
