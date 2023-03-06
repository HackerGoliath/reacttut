const initialState = 5
const multDivNum = (state = initialState, action) => {
    switch (action.type) {
        case "MULT": return state * action.payload;
        case "DIV": return state / action.paylallu;
        default: return state;
    }
}

export default multDivNum;