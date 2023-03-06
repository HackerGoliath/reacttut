const initialState = 0
const changeNum = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.paylallu;
        default: return state;
    }
}

export default changeNum;