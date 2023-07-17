import React, { useState, useEffect } from 'react';
import { byQuery } from 'api/ApiService';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import fetchGallery from 'api/ApiService';
import Searchbar from 'components/Searchbar/Searchbar';
// import MoviesGallery from 'components/ImageGallery/ImageGallery';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      }
    };

    fetchMoviesByQuery();
  }, [searchQuery]);

  useEffect(() => {
    movies.length > 0 && localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleInputChange = searchQuery => {
    setSearchQuery(searchQuery);
    setMovies([]);
  };
  return (
    <div>
      <Searchbar onSubmit={handleInputChange} />
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
