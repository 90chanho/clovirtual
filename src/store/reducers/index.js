import { combineReducers } from "redux"
import userReducer from "./userReducer"
import articleReducer from "./articleReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
	userReducer,
	articleReducer,
	authReducer
})

export default rootReducer
