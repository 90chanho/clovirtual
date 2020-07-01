import React, { Component } from "react"
import styled from "styled-components"

import CommentReaction from "components/comment/CommentReaction"

const StyledWrapper = styled.div`
	text-align: left;
	flex: 1;

	.commentBox {
		display: inline-block;
		background-color: #f1f2f5;
		border-radius: 20px;
		padding: 8px 14px;
		box-sizing: border-box;

		.content {
			margin-top: 3px;
		}
	}

	.author {
		font-weight: bold;
	}
`

export default class CommentContent extends Component {
	render() {
		return (
			<StyledWrapper>
				<div className="commentBox">
					<p className="author">이름</p>
					<p className="content">내용</p>
				</div>
				<CommentReaction />
			</StyledWrapper>
		)
	}
}
