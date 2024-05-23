import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/custom.css";
import MWFooter from "/src/components/header-footer/MWFooter";
import MWNavbar from "/src/components/header-footer/MWNavbar";
import Registration from "/src/components/log-register/Registration";
import MoodWatcher from "/src/components/landing/MoodWatcher";
import Login from "/src/components/log-register/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "/src/components/NotFound";
import MoodMovies from "/src/components/mood-watching/MoodMovies";
import MoodTv from "/src/components/mood-watching/MoodTv";
import MovieDetail from "/src/components/mood-watching/MovieDetail";
import TvDetail from "/src/components/mood-watching/TvDetail";
import ProfilePage from "./components/log-register/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MWNavbar />
      </header>
      <main>
        <Routes>
          <Route element={<MoodWatcher />} path="/" />
          <Route element={<Registration />} path="/auth/register" />
          <Route element={<Login />} path="/auth/login" />
          <Route element={<ProfilePage />} path="/auth/profile" />
          <Route element={<MoodMovies />} path="/mood_movies/:color" />
          <Route element={<MoodTv />} path="/mood_tv/:color" />
          <Route element={<MovieDetail />} path="/movie/details/:id_movie" />
          <Route element={<TvDetail />} path="/tv/details/:id_tv" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
      <footer>
        <MWFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
