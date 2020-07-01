import React, { Component } from "react"
import styled from "styled-components"
import { ReactComponent as logo } from "assets/logo.svg"

const Logo = styled(logo)``
const StyledWrapper = styled.header`
	background-color: #323236;
	padding: 1rem 0;
	a {
		display: inline-block;
		width: 98px;
		overflow: hidden;

		svg {
			position: relative;
			right: 100%;
		}
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
