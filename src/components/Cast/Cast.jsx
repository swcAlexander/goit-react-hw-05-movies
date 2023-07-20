import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import fetchGallery, { byId } from 'api/ApiService';
import styles from './Cast.module.css';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGallery(`${byId}/${id}/credits`);
        setCast(response.cast);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p> Oops ... Somesing went wrong...</p>}
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://via.placeholder.com/333x500'
                }
                className={styles.cast_img}
                alt={original_name}
              />
              <p className={styles.cast_text}>
                <span> Actor:</span> {original_name}
              </p>
              <p className={styles.cast_text}>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
