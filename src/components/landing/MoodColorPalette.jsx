import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
const MoodColorPalette = () => {
  const navigate = useNavigate();

  const handleColorClick = (color) => {
    navigate(`/mood_movies/${color}`);
  };

  return (
    <Row className="palette flex-column align-items-center justify-content-center mx-0 my-2 mx-sm-1 my-sm-3">
      <Button variant="red" onClick={() => handleColorClick("red")}></Button>
      <Button
        variant="orange"
        onClick={() => handleColorClick("orange")}
      ></Button>
      <Button
        variant="yellow"
        onClick={() => handleColorClick("yellow")}
      ></Button>
      <Button
        variant="green"
        onClick={() => handleColorClick("green")}
      ></Button>
      <Button variant="blue" onClick={() => handleColorClick("blue")}></Button>
      <Button
        variant="violet"
        onClick={() => handleColorClick("violet")}
      ></Button>
    </Row>
  );
};
export default MoodColorPalette;
