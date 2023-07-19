import { useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { byId } from 'api/ApiService';
import { Loader } from 'components/Loader/Loader';
import fetchGallery from 'api/ApiService';
import styles from 'pages/MovieDetail.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const currentLocation = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGallery(`${byId}/${id}`);
        setMovie(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const handleGoBack = () => {
    navigate(currentLocation.state?.from || '/');
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <p> Oops ... Somesing went wrong...</p>}
      <button onClick={handleGoBack} className={styles.back}>
        Go Back
      </button>
      {movie && (
        <>
          <div className={styles.container}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://via.placeholder.com/333x500'
              }
              className={styles.poster}
              width={250}
              alt="poster"
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
                <Link
                  to={`/movies/${id}/reviews`}
                  className={styles.cast_reviews}
                >
                  Reviews
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
