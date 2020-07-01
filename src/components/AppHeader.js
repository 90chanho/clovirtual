import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as logo } from "assets/logo.svg"

const Logo = styled(logo)``
const StyledWrapper = styled.header`
	padding: 1rem 0;
	box-shadow: 0 4px 10px 0px gray;
	a {
		display: inline-block;
		width: 98px;
		overflow: hidden;
	}
`

export default class AppHeader extends Component {
	render() {
		return (
			<StyledWrapper className="appHeader">
				<a href="https://www.clovirtualfashion.com/" target="_blank" rel="noopener noreferrer">
					<Logo />
				</a>
			</StyledWrapper>
		)
	}
}
