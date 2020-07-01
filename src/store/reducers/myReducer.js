import { GET_MY_INFO, SET_MY_INFO } from "../actions/myAction"
import { my } from "data/dummy.json"

let initValue = {
	my: null
}
if (window.localStorage.getItem("nzc-cvf")) {
	const localStorageData = window.localStorage.setItem("nzcUsers")
	initValue = {
		my: localStorageData.my
	}
} else {
	initValue.my = my
}

const myReducer = (state = initValue, action) => {
	switch (action.type) {
		case GET_MY_INFO:
			return state
		case SET_MY_INFO:
			return state
		default:
			return state
	}
}

export default myReducer
