import { Routes, Route, NavLink } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const LazyHome = lazy(() => import('pages/Home'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetailsPage = lazy(() => import('pages/MovieDetail'));
const LazyCast = lazy(() => import('components/Cast/Cast'));
const LazyReviews = lazy(() => import('components/Review/Review'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:id" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
