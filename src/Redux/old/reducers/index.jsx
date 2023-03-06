import { combineReducers } from "redux"
import changeNum from "./upDown";
import multDivNum from "./multDiv";

const rootReducer = combineReducers({
    changeNum,
    multDivNum
})

export default rootReducer;