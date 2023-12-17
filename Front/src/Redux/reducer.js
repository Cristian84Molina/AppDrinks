const initialState = {
   rutaPrincipal: "http://localhost:3002/",
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return {...state};    
    };

};

export default reducer;