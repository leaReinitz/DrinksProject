import {createStore,combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
// import companyReducer from './companyReducer'
import { add$ToUserName } from "../middlewares/crud";

const reducer= combineReducers({userReducer})
const store = createStore(reducer,applyMiddleware(add$ToUserName))
window.store=store;
export default store;


