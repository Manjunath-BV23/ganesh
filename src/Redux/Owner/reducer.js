import { ADD_OWNER } from "./action";

const initState = {
    owner: [],
}

export const ownerReducer = (store=initState, {type, payload}) => {
    switch(type) {
        case ADD_OWNER:
            return {...store, owner: [...payload]}
        default:
            return store;
    }
}