import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'redux/auth/authOperations';

import {
  addRecipeTofavoriteAPI,
  addShoppingList,
  deleteShoppingList,
  getFavoriteRecipesAPI,
  getMyRecipeAPI,
  getRecipeByIdAPI,
  getShoppingList,
  removeMyRecipeAPI,
  removeRecipeFromFavoriteAPI,
} from 'service/API/dishesApi';

export const getRecipeById = createAsyncThunk(
  'getRecipeById',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await getRecipeByIdAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getUserShoppingList = createAsyncThunk(
  'shopping-list',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await getShoppingList();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addUserShoppingList = createAsyncThunk(
  'shopping-list/add',
  async (obj, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await addShoppingList(obj);
      dispatch(getUserShoppingList());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'shopping-list/remove',
  async (obj, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await deleteShoppingList(obj);
      dispatch(getUserShoppingList());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addRecipeToFavorite = createAsyncThunk(
  'userResipes/addToFavorite',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await addRecipeTofavoriteAPI(id);
      dispatch(getFavoriteRecipes());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeRecipeFromFavorite = createAsyncThunk(
  'userRecipes/removeFromFavorite',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await removeRecipeFromFavoriteAPI(id);
      dispatch(getFavoriteRecipes());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'userRecipes/getFavoriteRecipes',
  async (page, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.accessToken;
    setAuthHeader(token);
    try {
      const data = await getFavoriteRecipesAPI(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getMyRecipe = createAsyncThunk(
  'userRecipes/getMyRecipes',
  async (page, { rejectWithValue }) => {
    try {
      const data = await getMyRecipeAPI(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeMyRecipe = createAsyncThunk(
  'userRecipes/removeMyRecipes',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeMyRecipeAPI(id);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
