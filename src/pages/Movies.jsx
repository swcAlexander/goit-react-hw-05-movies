import React, { useState, useEffect } from 'react';
import { byQuery } from 'api/ApiService';
import { Loader } from 'components/Loader/Loader';
import fetchGallery from 'api/ApiService';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) return;
    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGallery(byQuery, searchQuery);
        setMovies(response.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(true);
      }
    };

    fetchMoviesByQuery();
  }, [searchParams]);

  return (
    <div>
      <Searchbar onSubmit={setSearchParams} />
      {isLoading && <Loader />}
      {error && <p>Oops ... Something went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
