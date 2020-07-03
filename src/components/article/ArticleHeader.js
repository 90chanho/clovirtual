import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Profile from "components/Profile"

const StyledWrapper = styled.header`
	display: flex;
	align-items: center;
	.articleInfo {
		flex: 1;
		text-align: left;

		.author {
			font-weight: bold;
		}
		.createDate {
			color: darkgray;
			margin-top: 3px;
		}
	}
`

class ArticleHeader extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		return (
			<StyledWrapper>
				<Profile />
				<div className="articleInfo">
					<p className="author">Author</p>
					<p className="createDate">createDate</p>
				</div>
				<i className="fas fa-ellipsis-h"></i>
			</StyledWrapper>
		)
	}
}

const mapStateToProps = state => ({
	users: state.userReducer.users
})

export default connect(mapStateToProps)(ArticleHeader)
