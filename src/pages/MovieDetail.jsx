import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { byId } from 'api/ApiService';
import fetchGallery from 'api/ApiService';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetchGallery(`${byId}/${id}`);
        setMovie(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h1>{movie.title}</h1>
      <h2>User score: {Math.round(movie.vote_average * 10)}%</h2>
      <p>
        Overview <br /> {movie.overview}
      </p>
      <h2>Genres:</h2>
      <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
      <p>Additional information</p>
      <Link to={`/movies/${id}/cast`}>Cast</Link>
      <Link to={`/movies/${id}/reviews`}>Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
