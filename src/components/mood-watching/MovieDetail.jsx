import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Loading from "/src/components/Loading";
import CustomAlert from "/src/components/CustomAlert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCountryFetcher from "./where_to_watch/MovieCountryFetcher";
import WatchListButton from "./WatchListButton";

const MovieDetail = () => {
  const params = useParams();
  const movie_id = params.id_movie;
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}`;
  const myBearer = import.meta.env.VITE_TMDB_API_BEARER;

  const getMovieDetails = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(movieURL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myBearer}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok ", response.statusText);
      }
      const result = await response.json();
      setMovie(result);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setFetchError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie_id]);
  return (
    <>
      <Container className="flex-grow-1  d-flex flex-column justify-content-center align-items-center ">
        {fetchError && (
          <Row className=" flex-grow-1 d-flex flex-row justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <Image
                fluid
                thumbnail
                src="https://placebear.com/300/500"
                className="rounded-1 detailImg"
              />
            </Col>
            <Col md={6}>
              <CustomAlert text="Oops! Something went wrong. Please try again later." />
            </Col>
          </Row>
        )}
        {isLoading ? (
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={7}>
              <div className="d-none d-md-block ">
                <Loading variant="yellow" />
              </div>
            </Col>
            <Col>
              <Loading />
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6} lg={5} className="my-3 mt-md-1">
              <div>
                <Image
                  className="detailImg"
                  fluid
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : `https://placebear.com/g/300/500`
                  }
                ></Image>
              </div>
            </Col>
            <Col className="media-details">
              <h3>{movie.title}</h3>
              {movie.tagline && <h4 className="quote"> {movie.tagline}</h4>}
              <h6>About:</h6>
              <p> {movie.overview}</p>
              {movie.genres && movie.genres.length > 0 && (
                <>
                  <h5>Genres:</h5>
                  <ul>
                    {movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="fw-bold ">
                RunTime:
                <span className="fw-normal fst-italic ms-1">
                  {movie.runtime} min.
                </span>
              </p>
              <p className="fw-bold ">
                Origin Country:
                <span className="fw-normal fst-italic ms-1">
                  {movie.origin_country[0]}
                </span>
              </p>
              <p className="fw-bold ">
                Realese Date:
                <span className="fw-normal fst-italic ms-1">
                  {new Date(movie.release_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <WatchListButton details={movie} media_type="movie" />
            </Col>
          </Row>
        )}
      </Container>
      <Container className="flex-grow-1">
        <Row>
          <Col xs={12} md={6} className="col-md-4 offset-md-5 mb-3">
            <MovieCountryFetcher movie_id={movie.id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MovieDetail;
