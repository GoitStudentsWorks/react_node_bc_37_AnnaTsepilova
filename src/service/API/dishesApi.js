import axios from 'axios';

axios.defaults.baseURL = 'https://y-3wt8.onrender.com/api';

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const patchShoppingList = async info => {
  try {
    const { data } = await axios.patch(`/shoping-list/`, info);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/shopping-list/`);
    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const addShoppingList = async obj => {
  try {
    const { data } = await axios.post(
      `/shopping-list/?recipeId=${obj[1]}`,
      obj[0]
    );

    return { shoppingList: data };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteShoppingList = async obj => {
  try {
    if (obj.length > 0) {
      const { data } = await axios.delete(
        `/shopping-list/${obj[0].ingredientId}?measure=${obj[0].measure}&recipeId=${obj[1]}`
      );
      return data;
    }
    const { data } = await axios.delete(
      `/shopping-list/${obj.id}?measure=${obj.measure}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getLimitedRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/${category}`).then(({ data }) => {
    return data;
  });
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/${category}`).then(({ data }) => {
    return data;
  });
};

export const getRecipeByIdAPI = id => {
  return axios.get(`/recipes/id/${id}`).then(({ data }) => {
    return data;
  });
};

export const getRecipeByCategoryAPI = () => {
  return axios.get('/recipes/:category').then(({ data }) => {
    return data;
  });
};

export const getMyRecipeAPI = page => {
  return axios.get(`/ownRecipes?page=${page}`).then(({ data }) => {
    return data;
  });
};

export const addRecipeTofavoriteAPI = id => {
  return axios.post(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

export const removeRecipeFromFavoriteAPI = id => {
  return axios.put(`/favorite/${id}`).then(({ data }) => {
    return data;
  });
};

export const removeMyRecipeAPI = id => {
  return axios.delete(`/ownRecipes/${id}`).then(({ data }) => {
    return data;
  });
};

export const getFavoriteRecipesAPI = page => {
  if (page === 'all') {
    return axios.get(`/favorite/list?all=true`).then(({ data }) => {
      return data;
    });
  }
  return axios.get(`/favorite/list?page=${page}`).then(({ data }) => {
    return data;
  });
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getRecipesByQueryAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(
      `/recipes/search/byTitle?title=${query}&ingredient=${query}&page=${page}&per_page=${per_page}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getRecipesByIngredientAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(
      `/recipes/search/byIngr?ingredient=${query}&page=${page}&per_page=${per_page}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getIngredientsList = async () => {
  return axios.get(`/ingredients/list`).then(({ data }) => {
    return data;
  });
};

export const getPopularRecipe = async () => {
  return axios.get(`/popular-recipe`).then(({ data }) => {
    return data;
  });
};

export const addRecipe = async data => {
  return axios.post(`/ownRecipes/`, data).then(({ result }) => {
    return result;
  });
};

export const addRecipeImg = async data => {
  const formData = new FormData();
  formData.append('image', data);
  return axios
    .post(`/ownRecipes/recipeImage`, formData)
    .then(data => data.data.response);
};
