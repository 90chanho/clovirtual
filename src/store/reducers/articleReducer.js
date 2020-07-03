import {
	GET_ARTICLE_COMMENTS,
	ADD_ARTICLE_COMMENT,
	REMOVE_ARTICLE_COMMENT,
	LIKE_ARTICLE_COMMENT,
	CANCEL_LIKE_ARTICLE_COMMENT,
	ADD_RE_COMMENT,
	REMOVE_RE_COMMENT,
	LIKE_RE_COMMENT
} from "../actions/articleAction"
import { articles } from "data/dummy.json"

let initValue = {
	articles
}

if (window.localStorage.getItem("nzc-cvf-articles")) {
	const localStorageData = JSON.parse(window.localStorage.getItem("nzc-cvf-articles"))
	initValue.articles = localStorageData
} else {
	window.localStorage.setItem("nzc-cvf-articles", JSON.stringify(articles))
}

const setItemArticlesLocalStorage = data => {
	window.localStorage.setItem("nzc-cvf-articles", JSON.stringify(data))
}

const articleReducer = (state = initValue, { type, payload }) => {
	let changedState = state
	let updatedArticles = []
	switch (type) {
		case GET_ARTICLE_COMMENTS:
			return state
		case ADD_ARTICLE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid === payload.aid) {
					article.comments.push(payload)
				}
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case REMOVE_ARTICLE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid === payload.aid) {
					const targetIndex = article.comments.findIndex(comment => {
						return comment.cid === payload.cid
					})
					article.comments.splice(targetIndex, 1)
				}
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case LIKE_ARTICLE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid === payload.aid) {
					article.comments.forEach(comment => {
						if (comment.cid === payload.cid) {
							comment.likes.push(payload.authorUid)
						}
					})
				}
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case CANCEL_LIKE_ARTICLE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid === payload.aid) {
					article.comments.forEach(comment => {
						if (comment.cid === payload.cid) {
							const targetIndex = comment.likes.findIndex(liker => {
								return liker === payload.authorUid
							})
							comment.likes.splice(targetIndex, 1)
						}
					})
				}
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case ADD_RE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid === payload.aid) {
					article.comments.forEach(comment => {
						if (comment.cid === payload.cid) {
							comment.comments.push(payload)
						}
					})
				}
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case REMOVE_RE_COMMENT:
			return state
		case LIKE_RE_COMMENT:
			return state
		default:
			return state
	}
}

export default articleReducer
