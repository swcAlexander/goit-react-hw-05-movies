import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchGallery, { byId } from 'api/ApiService';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchGallery(`${byId}/${id}/reviews`);
        setReviews(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [id]);

  return reviews.length === 0 ? (
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
  );
};

export default Reviews;
