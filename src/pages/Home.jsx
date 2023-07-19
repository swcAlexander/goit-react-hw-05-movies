import React, { useState, useEffect } from 'react';
import fetchGallery from 'api/ApiService';
import { trending } from 'api/ApiService';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGallery(trending);
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p> Oops ... Somesing went wrong...</p>}
      {movies.length > 0 && (
        <div>
          <h1>Trending today</h1>
          <MoviesList movies={movies} currentPath={location.pathname} />
        </div>
      )}
    </>
  );
};

export default HomePage;
