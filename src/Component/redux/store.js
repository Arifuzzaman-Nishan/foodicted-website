import { createStore } from 'redux';
import foodDetailsReducer from './foodDetails/foodDetailsReducer';

const store = createStore(foodDetailsReducer);

export default store;
