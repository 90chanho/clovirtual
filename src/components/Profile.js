import React, { Component } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	i {
	}
`

export default class Profile extends Component {
	render() {
		return (
			<StyledWrapper>
				<i className="fas fa-user-alt"></i>
			</StyledWrapper>
		)
	}
}
