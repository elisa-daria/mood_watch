import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import MWlogo from "../assets/rainbow-logo.png";
import arrow from "/src/assets/imgs/arrow.png";
import PaletteCarousel from "/src/components/landing/PaletteCarousel.jsx";
import CrownMeSection from "/src/components/landing/CrownMeSection";
import MoodColorPalette from "/src/components/landing/MoodColorPalette.jsx";

const MoodWatcher = () => {
  return (
    <>
      <Container fluid className="flex-grow-1 bg-bg-header-footer">
        <Row className="hero text-center">
          <Col xs={12} lg={8}>
            <h1 className="fw-bold display-2">WATCH YOUR MOOD!</h1>
          </Col>
          <Col xs={12} lg={3} id="logo">
            <i className="bi bi-camera-reels me-2 display-1"></i>
            <i className="bi bi-rainbow display-1"></i>
            {/* <img src={MWlogo} alt="logo" id="logo" /> */}
          </Col>
        </Row>
      </Container>
      <Container fluid className="flex-grow-1 ">
        <Row className="main-section bg-bg-main justify-content-around align-items-center">
          <Col md={4} className="position-relative">
            <PaletteCarousel />
            <img src={arrow} alt="arrow" id="arrow" />
          </Col>
          <Col md={8}>
            <MoodColorPalette />
          </Col>
        </Row>
        <CrownMeSection />
      </Container>
    </>
  );
};
export default MoodWatcher;
