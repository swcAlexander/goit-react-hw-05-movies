import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import fetchGallery, { byId } from 'api/ApiService';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGallery(`${byId}/${id}/reviews`);
        setReviews(response.results);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p> Oops ... Somesing went wrong...</p>}
      {reviews.length === 0 ? (
        <h3>No Reviews.</h3>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <span>Author:</span> {author}
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
