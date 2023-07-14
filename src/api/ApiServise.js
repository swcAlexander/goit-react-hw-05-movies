import axios from 'axios';
import { toast } from 'react-toastify';

export const trending = 'https://api.themoviedb.org/3/trending/movie/week';
export const byQuery = 'https://api.themoviedb.org/3/search/movie';
export const byId = `https://api.themoviedb.org/3/movie`;

async function fetchGallery(USED_URL, searchQuery = '') {
  const axiosOptions = {
    method: 'get',
    url: USED_URL,
    params: {
      api_key: 'cbd959d2dbe2e2acae71462135de58bb',
      query: searchQuery,
    },
  };
  try {
    const response = await axios(axiosOptions);
    console.log(response.data);
    return response.data;
  } catch {
    toast.info("We're sorry, but you've reached the end of search results.");
  }
}
export default fetchGallery;
