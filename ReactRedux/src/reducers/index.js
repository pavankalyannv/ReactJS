import {combineReducers} from 'redux';
import counterReducer from './counter';
import isLoggedIn from './isLogged';

const reducer = combineReducers({
    count: counterReducer, 
    login: isLoggedIn
});

export default reducer;