import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/beers';

// export const fetchRecipesService = async (additionalUrl, controller) => {
//   const { data } = await axios.get(`${additionalUrl}`, {
//     signal: controller.signal,
//   });
//   return data;
// };

export const fetchRecipesService = async page => {
  const { data } = await axios.get(`?page=${page}`);
  return data;
};
