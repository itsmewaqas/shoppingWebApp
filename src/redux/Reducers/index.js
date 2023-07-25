import { combineReducers } from 'redux';
import addtocart from './addtocart';
import addRestaurant from './addRestaurant';
import userAdd from './userAdd';
import userLogin from './userLogin';

const rootReducer = combineReducers({
    addtocart,
    addRestaurant,
    userAdd,
    userLogin

})

export default rootReducer;

