import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import CustomAlert from "/src/components/CustomAlert.jsx";
import Loading from "/src/components/Loading.jsx";
import { Image } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const WatchTvButton = ({ tv_id, country_code }) => {
  const [tvProvider, setTvProvider] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [btnClass, setBtnClass] = useState("where_to_watch");

  const myBearer = import.meta.env.VITE_TMDB_API_BEARER;
  const providerURL = `https://api.themoviedb.org/3/tv/${tv_id}/watch/providers`;

  const fetchProvider = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(providerURL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myBearer}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
      }
      const result = await response.json();
      setTvProvider(result.results?.[country_code]?.flatrate ?? []);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setIsLoading(false);
      setFetchError(true);
    }
  };

  useEffect(() => {
    if (clicked) {
      fetchProvider();
    }
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
        <Col x={12}>
          <div onClick={handleClick} className={btnClass}>
            {clicked ? "Providers:" : "Where to Watch"}
          </div>
        </Col>
        {clicked && (
          <Col xs={12}>
            {tvProvider.length > 0 ? (
              <section className="provDetails">
                {tvProvider
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
                      />
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

export default WatchTvButton;
