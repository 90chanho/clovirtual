import React, { Component } from "react"
import styled from "styled-components"

import store from "store"
import { LIKE_ARTICLE_COMMENT, CANCEL_LIKE_ARTICLE_COMMENT } from "store/actions/articleAction"

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

	onCheckLikedCurrentUser = () => {
		const { likes } = this.props.commentData
		const { uid } = store.getState().authReducer.auth

		let alreadyChecked = false
		likes.forEach(like => {
			like === uid && (alreadyChecked = true)
		})
		return alreadyChecked
	}

	render() {
		const { showReCommentForm, commentType } = this.props
		return (
			<StyledWrapper>
				<button
					onClick={this.handleLikeComment}
					className={`buttonLike ${this.onCheckLikedCurrentUser() ? "liked" : "unliked"}`}>
					좋아요
				</button>
				<button
					hidden={commentType === "reComment"}
					className="buttonReComment"
					onClick={showReCommentForm}>
					답글 달기
				</button>
				<span className="createDate">댓글 작성 날짜</span>
			</StyledWrapper>
		)
	}
}

CommentReaction.defaultProps = {
	commentType: "comment"
}
