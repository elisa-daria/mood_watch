import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import Loading from "/src/components/Loading";
import Button from "react-bootstrap/Button";
import CustomAlert from "/src/components//CustomAlert";
import { Link, useNavigate, useParams } from "react-router-dom";
const MoodTv = () => {
  const params = useParams();
  const color = params.color;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const myBearer = import.meta.env.VITE_TMDB_API_BEARER;
  const baseUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=`;

  const getUrl = (color, page) => {
    const urls = {
      red: `${baseUrl}${page}&sort_by=popularity.desc&with_keywords=9748`,
      orange: `${baseUrl}${page}&sort_by=popularity.desc&with_genres=10764&with_keywords=158718`,
      yellow: `${baseUrl}${page}&sort_by=popularity.desc&with_keywords=283297|4344&without_genres=16`,
      green: `${baseUrl}${page}&sort_by=popularity.desc&with_keywords=18330`,
      blue: `${baseUrl}${page}&sort_by=popularity.desc&with_genres=10765`,
      violet: `${baseUrl}${page}&sort_by=popularity.desc&with_keywords=193400`,
    };
    return urls[color];
  };
  const quotes = {
    red: "Revenge is served! Give me some action.",
    orange: "Feeling fruity: your daily dose of fruity juice.",
    yellow: "CAUSE YOU WERE ALL YELLOW! Sing along.",
    green: "Chillin' in nature.",
    blue: "I'm feelin' blue like the moon.",
    violet: "Let me be in my lavender haze: could be love, could be hormones.",
  };

  const fetchMedia = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myBearer}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      const result = await response.json();
      setData(result.results);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setIsLoading(false);
      setFetchError(true);
    }
  };
  useEffect(() => {
    fetchMedia(getUrl(color, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  const handleMovieColor = () => {
    navigate(`/mood_movies/${color}`);
  };
  const loadMoreTv = () => {
    const newPage = page + 1;
    setPage(newPage);
    fetchMedia(getUrl(color, newPage));
    setShowMore(true);
  };
  const previuoslyOnTV = () => {
    setPage(1);
    fetchMedia(getUrl(color, 1));
    setShowMore(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container fluid className="flex-grow-1 d-flex flex-column">
      <Row className="hero text-center">
        <Col xs={12} md={8}>
          <h1 className="fw-bold display-2">
            Seeing {color.charAt(0).toUpperCase() + color.slice(1)}
          </h1>
        </Col>
        <Col xs={12} md={3} id="logo">
          <i className="bi bi-camera-reels me-2 display-1"></i>
          <i className="bi bi-rainbow display-1"></i>
        </Col>
      </Row>
      <Row className="justify-content-end align-items-center tv-show-switch">
        <Col xs={4} md={1} className="mx-0 px-0">
          <h4>Did You Mean:</h4>
        </Col>
        <Col xs={6} md={2} className="mx-0 px-0">
          <Button variant={color} onClick={handleMovieColor}>
            MOVIES
          </Button>
        </Col>
      </Row>
      {fetchError && (
        <CustomAlert text="Oops! Something went wrong. Please try again later." />
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Row className="gx-1 gy-3">
            <h2 className="mx-auto text-center text-bg-main pt-2">
              {color.charAt(0).toUpperCase() + color.slice(1)} Mood Tv
            </h2>
            <h3 className="mx-auto mt-0 text-center quote">{quotes[color]}</h3>
            {data.slice(0, 18).map((tv) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={2}
                className="mb-3 text-center px-1"
                key={tv.id}
              >
                <div className="img-container ">
                  <Link to={`/tv/details/${tv.id}`}>
                    <Image
                      src={
                        tv.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                          : `https://placebear.com/g/500/750`
                      }
                      fluid
                      className="posterImg"
                    />
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="m-auto text-center">
            <Col>
              <Button
                className="showing-btn"
                variant={color}
                onClick={showMore ? previuoslyOnTV : loadMoreTv}
              >
                {showMore ? "Previously On" : "Show me more"}
              </Button>
            </Col>
          </Row>
        </>
      )}
      <Button
        className="back-to-top "
        onClick={scrollToTop}
        variant="text-dark"
      >
        Back to Top
      </Button>
    </Container>
  );
};
export default MoodTv;
