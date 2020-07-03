import React, { Component } from "react"
import styled from "styled-components"
import moment from "moment"

import store from "store"
import {
	LIKE_ARTICLE_COMMENT,
	CANCEL_LIKE_ARTICLE_COMMENT,
	LIKE_RE_COMMENT,
	CANCEL_LIKE_RE_COMMENT
} from "store/actions/articleAction"

const StyledWrapper = styled.div`
	margin-top: 3px;
	.buttonLike,
	.buttonReComment,
	.createDate {
		font-size: 12px;
	}
	.buttonLike,
	.buttonReComment {
		font-weight: bold;
	}
	.buttonLike {
		&.liked {
			color: #0e98f5;
		}
	}
	.createDate {
		padding: 0 6px;
	}
`

export default class CommentReaction extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	handleLikeComment = () => {
		const { aid, cid, authorUid } = this.props.commentData
		const isAlreadyLiked = this.onCheckLikedCurrentUser()
		if (isAlreadyLiked) {
			store.dispatch({
				type: CANCEL_LIKE_ARTICLE_COMMENT,
				payload: {
					aid,
					cid,
					authorUid
				}
			})
		} else {
			store.dispatch({
				type: LIKE_ARTICLE_COMMENT,
				payload: {
					aid,
					cid,
					authorUid
				}
			})
		}
	}

	handleLikeReComment = () => {
		const { aid, cid, ccid, authorUid } = this.props.commentData
		const isAlreadyLiked = this.onCheckLikedCurrentUser()
		if (isAlreadyLiked) {
			store.dispatch({
				type: CANCEL_LIKE_RE_COMMENT,
				payload: {
					aid,
					cid,
					ccid,
					authorUid
				}
			})
		} else {
			store.dispatch({
				type: LIKE_RE_COMMENT,
				payload: {
					aid,
					cid,
					ccid,
					authorUid
				}
			})
		}
	}

	onCheckLikedCurrentUser = () => {
		const { uid } = store.getState().authReducer.auth
		const { likes } = this.props.commentData

		let alreadyChecked = false
		likes.forEach(like => {
			like === uid && (alreadyChecked = true)
		})
		return alreadyChecked
	}

	render() {
		const { showReCommentForm, commentType, commentData } = this.props
		return (
			<StyledWrapper>
				<button
					onClick={commentType === "comment" ? this.handleLikeComment : this.handleLikeReComment}
					className={`buttonLike ${this.onCheckLikedCurrentUser() ? "liked" : "unliked"}`}>
					좋아요
				</button>
				<button
					hidden={commentType === "reComment"}
					className="buttonReComment"
					onClick={showReCommentForm}>
					답글 달기
				</button>
				<span className="createDate">{moment(commentData.createDate).fromNow()}</span>
			</StyledWrapper>
		)
	}
}

CommentReaction.defaultProps = {
	commentType: "comment"
}
