import {GET_ARTICLES} from "./actions";
const initialState = {
   rutaPrincipal: "http://localhost:3002/",  //https://app-drinks.vercel.app/
   tragosSelected: [],
   articlesList: [],
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ARTICLES:
            return {...state, articlesList: action.payload};
        default:
            return {...state};    
    };

};

export default reducer;