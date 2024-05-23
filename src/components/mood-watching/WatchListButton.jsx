/* eslint-disable react/prop-types */
// import { useDispatch, useSelector } from "react-redux";
// import { addToWatchList } from "../../redux/actions/watchlistAction";
// import { useState, useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// const WatchListButton = ({ details }) => {
//   const [clicked, setClicked] = useState(false);
//   const {isAuthorized}=useSelector((state)=>state.user)
//   const dispatch = useDispatch();
//   const wacthlist = useSelector((state) => state.watchlist.content);
//   // eslint-disable-next-line react/prop-types
//   const isInWatchList = wacthlist.some((el) => el.id === details.id);

//   useEffect(() => {
//     if (isInWatchList) {
//       setClicked(true);
//     }
//   }, [isInWatchList]);

//   const handleClick = () => {
//     dispatch(addToWatchList(details)), setClicked(true);
//   };

//   return (
//     <p className="mt-4" onClick={handleClick}>
//       <span
//         className={`me-1 rounded-5 ${
//           clicked ? "watchlistButtonActive" : "watchlistButton"
//         }`}
//       >
//         <i className=" bi bi-camera-reels fs-2"></i>
//       </span>
//       {clicked ? "In WatchList" : "Add to WatchList"}
//     </p>
//   );
// };
// export default WatchListButton;
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList } from "../../redux/actions/watchlistAction";
import { useState, useEffect } from "react";
import CustomAlert from "/src/components/CustomAlert.jsx";

// eslint-disable-next-line react/prop-types
const WatchListButton = ({ details }) => {
  const [clicked, setClicked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.content);

  const isInWatchList = watchlist.some((el) => el.id === details.id);

  useEffect(() => {
    if (isInWatchList) {
      setClicked(true);
    }
  }, [isInWatchList]);

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } else {
      dispatch(addToWatchList(details));
      setClicked(true);
      setShowAlert(false);
    }
  };

  return (
    <>
      {showAlert && (
        <CustomAlert text="You need to be logged in to add items to your watchlist." />
      )}
      <p className="mt-4" onClick={handleClick}>
        <span
          className={`me-1 rounded-5 ${
            clicked ? "watchlistButtonActive" : "watchlistButton"
          }`}
        >
          <i className="bi bi-camera-reels fs-2"></i>
        </span>
        {clicked ? "In WatchList" : "Add to WatchList"}
      </p>
    </>
  );
};

export default WatchListButton;
