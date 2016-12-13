
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import posts from './posts';
import other from './other';
import comments from './comments';

const rootReducer = combineReducers({posts, other,comments, routing:routerReducer })
export default rootReducer;
