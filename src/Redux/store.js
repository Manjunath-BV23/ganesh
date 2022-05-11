import {createStore, combineReducers, applyMiddleware
} from "redux";

import { eventReducer } from "./Event/reducer";
import { ownerReducer } from "./Owner/reducer";
import { userReducer } from "./User/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
    owner: ownerReducer,
})

const loggerMiddleware = (store)=>(next)=>(action) =>{
    console.time("t1");
    next(action);
    console.timeEnd("t1")
}

export const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log("initial:", store.getState())