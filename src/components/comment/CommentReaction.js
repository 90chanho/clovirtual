import React, { Component } from "react"
import styled from "styled-components"

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
	.createDate {
		padding: 0 6px;
	}
`

export default class CommentReaction extends Component {
	render() {
		return (
			<StyledWrapper>
				<button className="buttonLike">좋아요</button>
				<button className="buttonReComment">답글 달기</button>
				<span className="createDate">댓글 작성 날짜</span>
			</StyledWrapper>
		)
	}
}
