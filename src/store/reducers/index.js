import { combineReducers } from "redux"
import userReducer from "./userReducer"
import commentReducer from "./commentReducer"
import articleReducer from "./articleReducer"
import myReducer from "./myReducer"

const rootReducer = combineReducers({
	userReducer,
	commentReducer,
	articleReducer,
	myReducer
})

export default rootReducer
