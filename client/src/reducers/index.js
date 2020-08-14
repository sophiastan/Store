import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import itemsReducer from './itemsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    auth: authReducer,
    items: itemsReducer,
    cart: cartReducer,
    form: reduxForm
});