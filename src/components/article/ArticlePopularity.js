import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
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
