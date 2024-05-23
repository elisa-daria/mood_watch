/* eslint-disable react/no-unescaped-entities */
import Carousel from "react-bootstrap/Carousel";
const PaletteCarousel = () => {
  return (
    <Carousel controls={false} pause={"hover"} touch={true} keyboard={true}>
      <Carousel.Item interval={1500} className="text-text-light">
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Choose Your Mood Color</h3>
          <p>How are you feeling today? Seeing red? Feeling blue?</p>
          <h4>
            Let's vibe with today's feelings and watch something accordingly!
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Red</h3>
          <p>I'm seeing red, I need revenge. Give me some action!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Orange</h3>
          <p>
            Feeling really fruity today. I need my daily dose of fruity juice
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Yellow</h3>
          <p>
            'Cause you were all yellow! Sing along. Need some good musical vibes
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Green</h3>
          <p>
            Just chilling. Just relaxing. Feeling at peace with the rest of the
            world
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Blue</h3>
          <p>
            I'm feeling blue like the moon. Need some space - of my own
            imagination -
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <div style={{ height: "300px", width: "200px" }}></div>
        <Carousel.Caption>
          <h3>Violet </h3>
          <p>Let me be in my lavender haze: could be love, could be hormones</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default PaletteCarousel;
