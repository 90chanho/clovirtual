import React, { Component } from "react"
import Article from "components/article/Article"
import styled from "styled-components"

const StyledWrapper = styled.main`
	padding-top: 2rem;
	h2 {
		font-size: 2rem;
	}
`

export default class AppMain extends Component {
	render() {
		return (
			<StyledWrapper>
				<h2>페이스북 게시글의 댓글 기능 구현</h2>
				<Article />
			</StyledWrapper>
		)
	}
}
