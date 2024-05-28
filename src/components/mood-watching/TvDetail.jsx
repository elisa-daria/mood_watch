import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Loading from "/src/components/Loading";
import CustomAlert from "/src/components/CustomAlert";
import TvCountryFetcher from "/src/components/mood-watching/where_to_watch/TvCountryFetcher.jsx";
import WatchListButton from "./WatchListButton";

const TvDetail = () => {
  const params = useParams();
  const id_tv = params.id_tv;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const myBearer = import.meta.env.VITE_TMDB_API_BEARER;
  const tvURL = "https://api.themoviedb.org/3/tv/" + id_tv;
  const fetchTvShow = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(tvURL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myBearer}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok ", response.statusText);
      }
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (err) {
      console.log("Error fetching data", err);
      setIsLoading(false);
      setFetchError(true);
    }
  };

  useEffect(() => {
    fetchTvShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id_tv]);

  return (
    <>
      <Container className="flex-grow-1  d-flex flex-column justify-content-center align-items-center">
        {fetchError && (
          <Row>
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
                  fluid
                  className="detailImg"
                  src={
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
                      : `https://placebear.com/g/300/500`
                  }
                ></Image>
              </div>
            </Col>
            <Col className="media-details">
              <h3>{data.name}</h3>
              {data.tagline && <h4 className="quote"> {data.tagline}</h4>}
              <h6>About:</h6>
              <p>{data.overview}</p>
              {data.created_by && data.created_by.length > 0 && (
                <>
                  <h5>Created By:</h5>
                  <ul>
                    {data.created_by.map((creator) => (
                      <li key={creator.id}>{creator.name}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.genres && data.genres.length > 0 && (
                <>
                  <h5>Genres:</h5>
                  <ul>
                    {data.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="fw-bold ">
                Show status:
                <span className="fw-normal fst-italic ms-1">{data.status}</span>
              </p>
              {data.seasons && (
                <p className="fw-bold">
                  Seasons:
                  <span className="fw-normal fst-italic ms-1">
                    {data.seasons.length}
                  </span>{" "}
                </p>
              )}
              <p className="fw-bold">
                First Air Date:
                <span className="fw-normal fst-italic ms-1">
                  {new Date(data.first_air_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
              <WatchListButton details={data} media_type="tv" />
            </Col>
          </Row>
        )}
      </Container>
      <Container className="flex-grow-1">
        <Row>
          <Col xs={12} md={6} className="col-md-4 offset-md-5 mb-3">
            <TvCountryFetcher tv_id={data.id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TvDetail;
