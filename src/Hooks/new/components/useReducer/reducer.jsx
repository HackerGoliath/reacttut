const reducer = (state, action) => {
    // if (action.type === "INC") {
    //     return state = state + 1
    // }
    // else if (action.type === "DEC") {
    //     // if (state === 0)
    //     //     return state
    //     // else {
    //     //     return state = state - 1;
    //     // }

    //     // or

    //     let newNum = 0
    //     state >= 1 ? (newNum = state - 1) : (newNum = 0);
    //     return newNum;
    // }
    // else {
    //     return state;
    // }

    // With switch
    switch (action.type) {
        case "INC":
            return state += 1
        case "DEC":
            let newNum = 0
            state !== 0 ? (newNum = state - 1) : (newNum = 0);
            return newNum;
        default:
            return state;
    }
}

export default reducer;