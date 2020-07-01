import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	border-top: 1px solid #cdd0d4;
	border-bottom: 1px solid #cdd0d4;
	display: flex;
	justify-content: space-around;
	padding: 5px;

	button {
		width: 30%;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 8px;

		&:hover {
			background-color: #eee;
		}

		i {
			margin-right: 5px;
			vertical-align: middle;
		}
	}
`

export default class ArticleReaction extends Component {
	render() {
		return (
			<StyledWrapper>
				<button>
					<i className="far fa-thumbs-up" />
					좋아요
				</button>
				<button>
					<i className="far fa-comment-alt"></i>
					댓글 달기
				</button>
				<button>
					<i className="far fa-share-square"></i>
					공유 하기
				</button>
			</StyledWrapper>
		)
	}
}
