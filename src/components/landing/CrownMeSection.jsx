import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import crown from "/src/assets/imgs/cartoon-crown.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomAlert from "/src/components/CustomAlert.jsx";

const CrownMeSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);
  const handleCrownBtn = (e) => {
    if (!isChecked) {
      e.preventDefault();
      setShowAlert(true);
    } else {
      e.target.classList.add("crown-me-btn:hover");
      setTimeout(() => {
        navigate("/auth/register");
      }, 200);
      setShowAlert(false);
    }
  };
  return (
    <>
      <Row className="bg-text-light">
        <Col
          xs={12}
          md={8}
          className="text-center d-md-flex flex-row justify-content-center align-items-center"
        >
          <div className="wrapper p-3 position-relative">
            <input
              type="checkbox"
              id="checkB"
              required={true}
              onChange={handleCheckboxChange}
            ></input>
            <i className="bi bi-check-lg position-absolute top-50 start-50 translate-middle text-text-light fs-1"></i>
          </div>
          <label htmlFor="checkB" className="checkLabel">
            I am a Queen: let me enter my Reign!
          </label>
        </Col>
        <Col className="text-center mt-2 d-md-flex justify-content-center align-items-end">
          <div className="btn" id="crown-me-btn" onClick={handleCrownBtn}>
            Crown me
          </div>
        </Col>
        <Row className="text-center m-auto">
          <Col xs={12}>
            {showAlert && (
              <CustomAlert text="Need to check in before you check out!" />
            )}
          </Col>
        </Row>
      </Row>
      <Row className="bg-text-light">
        <Col xs={12}>
          <div className="crown text-center">
            <img src={crown} alt="crown" />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default CrownMeSection;
