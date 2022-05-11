import { ADD_EVENT } from "./action";

const initState = {
    event: [],
}

export const eventReducer = (store=initState, {type, payload}) => {
    switch(type) {
        case ADD_EVENT:
            return {...store, event: [...payload]}
        default:
            return store;
    }
}