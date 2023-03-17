// import axios from "axios";

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '33662820-a48deb44bdcb653f2d0a8874c'
// const params = 'image_type=photo&orientation=horizontal&safesearch=true';

// export const fetchImg = async (inputData, page) => {
//   const response = await axios.get(
//     `?key=${API_KEY}&q=${inputData}&${params}&page=${page}&per_page=12`
//   );
//   return response.data;
// }; 



// function fetchImages (searchName, page) {
//   const KEY = '24739758-4c739ca612149bb371b205192';
//   const BASE_URL = 'https://pixabay.com/api'

//   return fetch(`${BASE_URL}/?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
//       if (response.ok) {
//         return response.json();
//       }
  
//       return Promise.reject(new Error(`No image with the name ${searchName}`));
//   });
// }

// export default fetchImages;

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '33662820-a48deb44bdcb653f2d0a8874c'

// const pictureInstance = axios.create({
//   baseURL: 'https://pixabay.com/api',
// });

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

