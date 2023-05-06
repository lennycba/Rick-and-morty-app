import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./types";


const initialState = {
    myFavorites:[],
}

function rootReducer (state = initialState, {type,payload}) {
    switch(type){
        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: payload };
        case FILTER:
      const { allCharacters } = state;
      const filtered = allCharacters.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: filtered,
      };
    case ORDER:
      const { myFavorites } = state;
      const sorted = [...myFavorites].sort((a, b) => {
        if (payload === "Ascendente") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sorted,
      };
    default:
      return state;
  }
};





export default rootReducer