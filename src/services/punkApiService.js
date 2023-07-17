import axios from 'axios';

export const fetchRecipesService = async page => {
  axios.defaults.baseURL = 'https://api.punkapi.com/';
  const options = {
    params: {
      page,
    },
  };

  const { data } = await axios.get('v2/beers', options);
  return data;
};
