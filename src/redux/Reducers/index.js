import { combineReducers } from 'redux';
import addtocart from './addtocart';
import addRestaurant from './addRestaurant';

const rootReducer = combineReducers({
    addtocart,
    addRestaurant

})

export default rootReducer;

