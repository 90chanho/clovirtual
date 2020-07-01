import { GET_ARTICLES } from "../actions/articleAction"
import { articles } from "data/dummy.json"

const initValue = {
	articles
}

const articleReducer = (state = initValue, action) => {
	switch (action.type) {
		case GET_ARTICLES:
			return state
		default:
			return state
	}
}

export default articleReducer
