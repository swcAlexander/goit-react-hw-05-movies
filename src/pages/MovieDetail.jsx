import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import { byId } from 'api/ApiService';
import fetchGallery from 'api/ApiService';
import styles from './MovieDetail.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
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
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleGoBack} className={styles.back}>
        Go Back
      </button>
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className={styles.poster}
          alt=""
        />
        <div>
          <h1>{movie.title}</h1>
          <h2>User score: {Math.round(movie.vote_average * 10)}%</h2>
          <p>
            Overview <br /> {movie.overview}
          </p>
          <h2>Genres:</h2>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          <p>Additional information</p>
          <div className={styles.container_mini}>
            <Link to={`/movies/${id}/cast`} className={styles.cast_reviews}>
              Cast
            </Link>
            <Link to={`/movies/${id}/reviews`} className={styles.cast_reviews}>
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
