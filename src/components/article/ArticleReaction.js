import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
`

export default class ArticleReaction extends Component {
	render() {
		return (
			<StyledWrapper>
				<button>
					<i className="fas fa-thumbs-up" />
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
