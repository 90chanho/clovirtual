import React, { Component } from "react"
import Article from "components/article/Article"
import styled from "styled-components"
import { connect } from "react-redux"

const StyledWrapper = styled.main`
	flex: 1;
	background-color: #f1f2f5;
	padding-top: 2rem;
	padding-bottom: 2rem;

	h2 {
		font-size: 2rem;
	}
`

class AppMain extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		const { articles } = this.props
		return (
			<StyledWrapper>
				<h2>페이스북 게시글의 댓글 기능 구현</h2>
				<ul>
					{articles.map((article, index) => {
						return <Article key={`${article.aid}`} />
					})}
				</ul>
			</StyledWrapper>
		)
	}
}

const mapStateToProps = state => ({
	articles: state.articleReducer.articles
})

export default connect(mapStateToProps, null)(AppMain)
