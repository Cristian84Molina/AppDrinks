import {GET_ARTICLES} from "./actions";
const initialState = {
   rutaPrincipal: "http://localhost:3002/",  //"http://localhost:3002/"
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