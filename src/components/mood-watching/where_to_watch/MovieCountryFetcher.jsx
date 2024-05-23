import WatchMovieButton from "./WatchMovieButton";
import { useEffect, useState } from "react";
import CustomAlert from "/src/components/CustomAlert.jsx";

// eslint-disable-next-line react/prop-types
const MovieCountryFetcher = ({ movie_id }) => {
  const [countryCode, setCountryCode] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [ipAddress, setIpAddress] = useState(null);

  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error("Failed to fetch IP address: " + response.statusText);
      }
      const data = await response.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
      throw error;
    }
  };

  const fetchCountryCode = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      if (!response.ok) {
        throw new Error("Failed to fetch country code");
      }
      const data = await response.json();
      setCountryCode(data.country_code);
    } catch (error) {
      console.error("Error fetching country code:", error);
      setFetchError(true);
    }
  };
  useEffect(() => {
    fetchIpAddress();
  }, []);
  useEffect(() => {
    fetchCountryCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipAddress]);

  return (
    <>
      {fetchError && (
        <CustomAlert text="Oops! Something went wrong. Please try again later." />
      )}
      <WatchMovieButton movie_id={movie_id} country_code={countryCode} />
    </>
  );
};
export default MovieCountryFetcher;
