import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	padding-bottom: 10px;
	.fa-thumbs-up {
		color: #0f98f5;
	}
`

export default class ArticlePopularity extends Component {
	render() {
		return (
			<StyledWrapper>
				<div>
					<i className="fas fa-thumbs-up"></i> 좋아요 숫자
				</div>
				<div>댓글 몇 개</div>
			</StyledWrapper>
		)
	}
}
