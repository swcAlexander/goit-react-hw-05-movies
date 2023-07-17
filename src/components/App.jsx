import { Routes, Route, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetailsPage from 'pages/MovieDetail';
import Cast from './Cast/Cast';
import Reviews from './Review/Review';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <nav>
          <NavLink to="/" end className="home_movies">
            Home
          </NavLink>
          <NavLink to="/movies" end className="home_movies">
            Movies
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
