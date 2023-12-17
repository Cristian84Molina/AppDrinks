import {createStore, combineReducers} from "redux";
import rutaReducer from "./reducer";

const reducers = combineReducers({
   rutaReducer,
});

const store = createStore(reducers);

export default store;