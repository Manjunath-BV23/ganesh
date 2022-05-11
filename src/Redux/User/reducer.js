import {ADD_USER} from "./action";

const initState = {
    user: [],
}

export const userReducer = (store=initState, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return {...store, user:[...payload]}
        default:
            return store;
    }
}