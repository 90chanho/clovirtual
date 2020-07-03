import { users } from "data/dummy.json"
import { GET_USERS } from "../actions/userAction"

let initValue = {
	users: users
}

if (window.localStorage.getItem("nzc-cvf-users")) {
	const localStorageData = JSON.parse(window.localStorage.getItem("nzc-cvf-users"))
	initValue = {
		users: localStorageData
	}
} else {
	window.localStorage.setItem("nzc-cvf-users", JSON.stringify(users))
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
