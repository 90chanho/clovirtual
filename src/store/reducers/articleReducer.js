import {
	GET_ARTICLE_COMMENTS,
	ADD_ARTICLE_COMMENT,
	REMOVE_ARTICLE_COMMENT,
	LIKE_ARTICLE_COMMENT,
	CANCEL_LIKE_ARTICLE_COMMENT,
	ADD_RE_COMMENT,
	REMOVE_RE_COMMENT,
	LIKE_RE_COMMENT,
	CANCEL_LIKE_RE_COMMENT
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
				if (article.aid === payload.aid) article.comments.push(payload)
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
				if (article.aid !== payload.aid) return article
				const targetIndex = article.comments.findIndex(comment => comment.cid === payload.cid)
				article.comments.splice(targetIndex, 1)
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
				if (article.aid !== payload.aid) return article
				article.comments.forEach(
					comment => comment.cid === payload.cid && comment.likes.push(payload.authorUid)
				)
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
				if (article.aid !== payload.aid) return article
				const targetComment = article.comments.filter(comment => comment.cid === payload.cid)
				const targetIndex = targetComment[0].likes.findIndex(liker => liker === payload.authorUid)
				targetComment[0].likes.splice(targetIndex, 1)
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
				if (article.aid !== payload.aid) return article
				article.comments.forEach(
					comment => comment.cid === payload.cid && comment.comments.push(payload)
				)
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case LIKE_RE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid !== payload.aid) return article
				const targetComment = article.comments.filter(comment => comment.cid === payload.cid)
				const targetReComment = targetComment[0].comments.filter(
					recomment => recomment.ccid === payload.ccid
				)
				targetReComment[0].likes.push(payload.authorUid)
				return article
			})
			changedState = {
				...state,
				articles: updatedArticles
			}
			setItemArticlesLocalStorage(updatedArticles)
			return changedState
		case CANCEL_LIKE_RE_COMMENT:
			updatedArticles = state.articles.map(article => {
				if (article.aid !== payload.aid) return article
				const targetComment = article.comments.filter(comment => comment.cid === payload.cid)
				const targetReComment = targetComment[0].comments.filter(
					recomment => recomment.ccid === payload.ccid
				)
				const targetIndex = targetReComment[0].likes.findIndex(liker => {
					return liker === payload.authorUid
				})
				targetReComment[0].likes.splice(targetIndex, 1)
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
		default:
			return state
	}
}

export default articleReducer
