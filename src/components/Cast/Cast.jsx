import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGallery, { byId } from 'api/ApiService';

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
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
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
