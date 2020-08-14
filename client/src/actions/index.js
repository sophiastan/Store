import axios from 'axios';
import { FETCH_USER, FETCH_ITEMS, ADD_TO_CART } from './types';

// FETCH_USER
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

// FETCH_ITEMS
export const submitItem = (values, history) => async dispatch => {
  const res = await axios.post('/api/home', values);

  history.push('/home');
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const fetchItems = () => async dispatch => {
  const res = await axios.get('/api/home');

  dispatch({ type: FETCH_ITEMS, payload: res.data });
}

// ADD_TO_CART
export const addToCart = (item) => async dispatch => {
  const res = await axios.post('/api/cart', item);

  // history.push('/cart');

  dispatch({ type: ADD_TO_CART, payload: res.data });
}

export const fetchCart = () => async dispatch => {
  const res = await axios.get('/api/cart');

  dispatch({ type: ADD_TO_CART, payload: res.data });
}


