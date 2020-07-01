import React, { Component } from "react"
import styled from "styled-components"

import ArticleHeader from "components/article/ArticleHeader"
import ArticleContent from "components/article/ArticleContent"
import ArticlePopularity from "components/article/ArticlePopularity"
import ArticleReaction from "components/article/ArticleReaction"
import ArticleComment from "components/article/ArticleComment"

const StyledWrapper = styled.article`
	min-width: 80%;
	max-width: 500px;
	display: inline-block;
	background-color: #fff;
	border: 1px solid gray;
	border-radius: 12px;
	padding: 15px;
`

export default class Article extends Component {
	render() {
		return (
			<StyledWrapper>
				<ArticleHeader />
				<ArticleContent />
				<footer>
					<ArticlePopularity />
					<ArticleReaction />
					<ArticleComment />
				</footer>
			</StyledWrapper>
		)
	}
}
