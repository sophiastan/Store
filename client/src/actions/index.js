import axios from 'axios';
import { FETCH_USER, FETCH_ITEMS, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from './types';

// FETCH_USER
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

// FETCH_ITEMS
export const submitItem = (values, history) => async dispatch => {
  console.log(values);
  const res = await axios.post('/api/home', values);

  history.push('/home');
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const fetchItems = () => async dispatch => {
  const res = await axios.get('/api/home');

  dispatch({ type: FETCH_ITEMS, payload: res.data });
}

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

//subtract qt action
export const subQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}