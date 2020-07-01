import React, { Component } from "react"
import styled from "styled-components"

import Profile from "components/Profile"
import CommentAddForm from "components/comment/CommentAddForm"
import CommentContent from "components/comment/CommentContent"

const StyledWrapper = styled.li`
	.commentContent,
	.reCommentItem {
		display: flex;
		margin-top: 10px;
	}
	.reCommentList {
		padding-left: 45px;
	}
`

export default class Comment extends Component {
	render() {
		return (
			<StyledWrapper>
				<div className="commentContent">
					<Profile type="small" />
					<CommentContent />
				</div>
				<ul className="reCommentList">
					<li className="reCommentItem">
						<Profile type="small" />
						<CommentContent />
					</li>
					<li>
						<CommentAddForm />
					</li>
				</ul>
			</StyledWrapper>
		)
	}
}
