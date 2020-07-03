import React, { Component } from "react"
import styled from "styled-components"

import ArticleHeader from "components/article/ArticleHeader"
import ArticleContent from "components/article/ArticleContent"
import ArticlePopularity from "components/article/ArticlePopularity"
import ArticleReaction from "components/article/ArticleReaction"
import ArticleComment from "components/article/ArticleComment"

const StyledWrapper = styled.article`
	margin: 0 auto;
	width: 500px;
	background-color: #fff;
	border-radius: 8px;
	padding: 15px;
	margin-top: 16px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export default class Article extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		const { articleData } = this.props
		return (
			<StyledWrapper>
				<ArticleHeader />
				<ArticleContent />
				<footer>
					<ArticlePopularity articleData={articleData} />
					<ArticleReaction />
					<ArticleComment articleData={articleData} />
				</footer>
			</StyledWrapper>
		)
	}
}
