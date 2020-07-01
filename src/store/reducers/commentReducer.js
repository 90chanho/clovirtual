import {
	GET_COMMENTS,
	ADD_COMMENT,
	REMOVE_COMMENT,
	LIKE_COMMENT,
	RE_COMMENT
} from "../actions/commentAction"

const initValue = {}

const commentReducer = (state = initValue, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return state
		case ADD_COMMENT:
			return state
		case REMOVE_COMMENT:
			return state
		case LIKE_COMMENT:
			return state
		case RE_COMMENT:
			return state
		default:
			return state
	}
}

export default commentReducer
