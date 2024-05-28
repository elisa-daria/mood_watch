import Spinner from "react-bootstrap/Spinner";

// eslint-disable-next-line react/prop-types
const Loading = ({ variant = "green" }) => {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center my-3">
      <Spinner
        animation="border"
        variant={variant}
        className="mt-2 display-1"
      />
    </div>
  );
};
export default Loading;
