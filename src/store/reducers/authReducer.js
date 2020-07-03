import { GET_AUTH_INFO, SET_AUTH_INFO } from "../actions/authAction"
import { auth } from "data/dummy.json"

let initValue = {
	auth: auth
}
if (window.localStorage.getItem("nzc-cvf-auth")) {
	const localStorageData = JSON.parse(window.localStorage.getItem("nzc-cvf-auth"))
	initValue = {
		auth: localStorageData
	}
} else {
	window.localStorage.setItem("nzc-cvf-auth", JSON.stringify(auth))
}

const authReducer = (state = initValue, action) => {
	switch (action.type) {
		case GET_AUTH_INFO:
			return state
		case SET_AUTH_INFO:
			return state
		default:
			return state
	}
}

export default authReducer
