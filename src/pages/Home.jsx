import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchGallery from 'api/ApiServise';
import { trending } from 'api/ApiServise';

const OnHomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchGallery(trending, '').then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies.map(hit => {
        return (
          <li key={hit.id}>
            <Link to={`${hit.id}`} />
            {hit.title}
          </li>
        );
      })}
    </ul>
  );
};

export default OnHomePage;
