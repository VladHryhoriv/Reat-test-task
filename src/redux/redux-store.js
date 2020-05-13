import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import {peopleReducer} from './people'
import thunk from "redux-thunk";

const reducers = combineReducers({
    peoplePage:peopleReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;