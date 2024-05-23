import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CustomAlert from "/src/components/CustomAlert.jsx";
import Loading from "/src/components/Loading.jsx";

// eslint-disable-next-line react/prop-types
const WatchMovieButton = ({ movie_id, country_code }) => {
  const [movieProvider, setMovieProvider] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [btnClass, setBtnClass] = useState("where_to_watch");

  const myBearer = import.meta.env.VITE_TMDB_API_BEARER;
  const movieProvidersURL = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`;

  const getMovieProviders = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(movieProvidersURL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myBearer}`,
        },
      });
      if (!response.ok) {
        throw new Error("Problems retriving data: " + response.statusText);
      }
      const result = await response.json();
      setMovieProvider(result.results?.[country_code]?.flatrate ?? []);
      setIsLoading(false);
    } catch (error) {
      setFetchError(true);
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (clicked) getMovieProviders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
    setBtnClass("providers");
  };
  return (
    <Container>
      {isLoading && <Loading />}
      {fetchError && (
        <CustomAlert text="Oops! Something went wrong. Please try again later." />
      )}
      <Row className="align-items-center justify-content-center">
        <Col xs={12}>
          <div onClick={handleClick} className={btnClass}>
            {clicked ? "Providers:" : "Where to Watch"}
          </div>
        </Col>
        {clicked && (
          <Col xs={12}>
            {movieProvider.length > 0 ? (
              <section className="provDetails">
                {movieProvider
                  .filter(
                    (provider) =>
                      provider.provider_name !== "Netflix basic with Ads"
                  )
                  .map((provider) => (
                    <article key={provider.provider_id}>
                      <Image
                        className="provLogo"
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        alt={provider.provider_name}
                      ></Image>

                      <p>{provider.provider_name}</p>
                    </article>
                  ))}
              </section>
            ) : (
              <p>No providers available</p>
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default WatchMovieButton;
