import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGallery, { byId } from 'api/ApiService';
import styles from './Cast.module.css';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchGallery(`${byId}/${id}/credits`);
        setCast(response.cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [id]);

  return (
    <>
      {
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
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
      }
    </>
  );
};

export default Cast;
