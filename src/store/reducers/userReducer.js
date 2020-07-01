import { users } from "data/dummy.json"
import { GET_USERS } from "../actions/userAction"

let initValue = {
	users: []
}
if (window.localStorage.getItem("nzc-cvf")) {
	const localStorageData = window.localStorage.setItem("nzcUsers")
	initValue = {
		users: localStorageData.users
	}
} else {
	initValue.users = users
}

const userReducer = (state = initValue, action) => {
	switch (action.type) {
		case GET_USERS:
			return state
		default:
			return state
	}
}

export default userReducer
