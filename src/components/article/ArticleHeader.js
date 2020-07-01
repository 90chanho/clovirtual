import React, { Component } from "react"
import styled from "styled-components"
import Profile from "components/Profile"

const StyledWrapper = styled.header`
	display: flex;
	align-items: center;
`

export default class ArticleHeader extends Component {
	render() {
		return (
			<StyledWrapper>
				<Profile />
				<div>
					<p>Author</p>
					<p>createDate</p>
				</div>
			</StyledWrapper>
		)
	}
}
