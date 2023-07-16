import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchGallery from 'api/ApiService';
import { trending } from 'api/ApiService';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchGallery(trending);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
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

export default HomePage;
