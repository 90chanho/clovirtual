import React, { Component, createRef } from "react"
import styled from "styled-components"

import store from "store"
import { REMOVE_ARTICLE_COMMENT } from "store/actions/articleAction"
import CommentReaction from "components/comment/CommentReaction"
import Modal from "components/modal/Modal"

const StyledWrapper = styled.div`
	position: relative;
	text-align: left;
	flex: 1;

	.contentWrapper {
		display: inline-block;
		position: relative;
	}

	.commentBox {
		display: inline-block;
		max-width: 400px;
		background-color: #f1f2f5;
		border-radius: 20px;
		padding: 8px 14px;
		box-sizing: border-box;
		position: relative;

		.content {
			margin-top: 3px;
			line-break: anywhere;
		}
	}

	.commentLikes {
		box-shadow: 0 0 3px 0px gray;
		background-color: #fff;
		border-radius: 8px;
		position: absolute;
		bottom: 0;
		left: 90%;
		width: 30px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		.fa-thumbs-up {
			color: #489af0;
			font-size: 10px;
		}
		span {
			display: inline-block;
			font-size: 11px;
			margin-left: 3px;
			font-weight: bold;
		}
	}

	.commentHandle {
		position: absolute;
		top: 50%;
		left: 100%;
		transform: translateY(-50%);

		i {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			&:hover {
				background-color: #f1f2f5;
			}
		}
	}

	.handlebuttonWrapper {
		box-shadow: 0 0 3px 0 gray;
		background-color: #fff;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: calc(100% + 30px);
		width: 100px;
		text-align: center;
		transform: translateY(-50%);
		padding: 10px;

		button {
			width: 100%;
			border-radius: 4px;
			padding: 5px;
			&:hover {
				background-color: #f1f2f5;
			}
		}
	}

	.author {
		font-weight: bold;
	}
`

export default class CommentContent extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.floatLayer = createRef()
	}

	state = {
		isShowCommentDeleteModal: false
	}

	onDeleteComment = () => {
		const { aid, cid } = this.props.commentData
		const payload = {
			aid,
			cid
		}
		store.dispatch({ type: REMOVE_ARTICLE_COMMENT, payload })
	}

	onShowCommentDeleteModal = () => {
		this.setState({
			isShowCommentDeleteModal: true
		})
	}

	onHideCommentDeleteModal = () => {
		this.setState({
			isShowCommentDeleteModal: false
		})
	}

	onToggleFloatLayer = e => {
		e.stopPropagation()
		this.floatLayer.current.classList.contains("is-show")
			? this.floatLayer.current.classList.remove("is-show")
			: this.floatLayer.current.classList.add("is-show")
	}

	render() {
		const { commentData, userData, showReCommentForm, commentType } = this.props
		return (
			<StyledWrapper>
				<div className="contentWrapper">
					<div className="commentBox">
						<p className="author">{userData.name}</p>
						<p className="content">{commentData.content}</p>
					</div>
					<div className="commentLikes" hidden={!commentData.likes.length}>
						<i className="fas fa-thumbs-up" />
						<span>{commentData.likes.length}</span>
					</div>
					<div className="commentHandle">
						<i
							className="fas fa-ellipsis-h clickable toggleFloatLayerButton"
							onClick={this.onToggleFloatLayer}
						/>
					</div>
					<div className="handlebuttonWrapper floatLayer" ref={this.floatLayer}>
						<button onClick={this.onShowCommentDeleteModal}>삭제하기</button>
					</div>
				</div>
				{this.state.isShowCommentDeleteModal && (
					<Modal title="댓글을 삭제하시겠습니까?" desc="해당 댓글의 답글들도 전부 삭제됩니다.">
						<button className="cancel" onClick={this.onHideCommentDeleteModal}>
							취소
						</button>
						<button className="action" onClick={this.onDeleteComment}>
							확인
						</button>
					</Modal>
				)}
				<CommentReaction
					commentType={commentType}
					commentData={commentData}
					showReCommentForm={showReCommentForm}
				/>
			</StyledWrapper>
		)
	}
}

CommentContent.defaultProps = {
	commentType: "comment",
	showReCommentForm: () => {}
}
