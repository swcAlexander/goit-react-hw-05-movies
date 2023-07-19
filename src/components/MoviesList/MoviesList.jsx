import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, currentPath }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: currentPath },
            }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
