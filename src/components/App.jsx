import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout/Layout';

const LazyHome = lazy(() => import('pages/Home'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetailsPage = lazy(() => import('pages/MovieDetail'));
const LazyCast = lazy(() => import('components/Cast/Cast'));
const LazyReviews = lazy(() => import('components/Review/Review'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHome />} />
        <Route path="movies" element={<LazyMovies />} />
        <Route path="movies/:id" element={<LazyMovieDetailsPage />}>
          <Route path="cast" element={<LazyCast />} />
          <Route path="reviews" element={<LazyReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
