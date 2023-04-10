import { ADD_FAV,REMOVE_FAV } from "./types";


const initialState = {
    myFavorites:[],
}

function rootReducer (state = initialState, {type,payload}) {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload]
            };
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((char) => char.id !== Number(payload))
            };
        default:
            return {...state};
    };
};



export default rootReducer