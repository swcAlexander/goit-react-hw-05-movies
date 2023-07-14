import { Routes, Route, NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home';
import MovieDetailsPage from 'pages/Movies';

const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies" end>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
