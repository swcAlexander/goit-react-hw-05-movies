import React, { useState, useEffect } from 'react';
import { byQuery } from 'api/ApiService';
import { Loader } from 'components/Loader/Loader';
import fetchGallery from 'api/ApiService';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      if (searchQuery.trim() === '') {
        return;
      }
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
  }, [searchQuery]);

  const handleInputChange = searchQuery => {
    setSearchQuery(searchQuery);
    setMovies([]);
  };
  return (
    <div>
      <Searchbar onSubmit={handleInputChange} />
      {isLoading && <Loader />}
      {error && <p> Oops ... Somesing went wrong...</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
