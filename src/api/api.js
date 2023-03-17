import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '33662820-a48deb44bdcb653f2d0a8874c'

export const fetchImages = async (searchQuery, page) => {
  const { data } = await axios.get('/', {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
  return data;
};

